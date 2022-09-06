import React from 'react';
import { useGetUsersQuery } from '../../store/features/users/usersSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SingleUserList from '../SingleUserList/SingleUserList';
import Alert from '../Alert/Alert';

function UsersList() {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useGetUsersQuery();

  const userList = users?.map((item) => (<SingleUserList item={item} key={item.id} />));

  if (isError) return (<Alert title={error} />);

  return (
    <div>
      {!isLoading ? userList : <LoadingSpinner /> }
    </div>
  );
}

export default UsersList;
