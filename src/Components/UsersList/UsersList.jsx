import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectPostError } from '../../store/features/users/usersSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SingleUserList from '../SingleUserList/SingleUserList';
import Alert from '../Alert/Alert';

function UsersList() {
  const users = useSelector(selectAllUsers);
  const error = useSelector(selectPostError);

  const userList = users?.map((item) => (<SingleUserList item={item} key={item.id} />));

  if (error) return (<Alert title={error} />);

  return (
    <div>
      {users.length ? userList : <LoadingSpinner /> }
    </div>
  );
}

export default UsersList;
