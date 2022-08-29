import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserById } from '../../store/features/users/usersSlice';
import UserImageProfile from '../UserImageProfile/UserImageProfile';
import UserProfileItem from '../UserProfileItem/UserProfileItem';

function UserProfile() {
  const { userId } = useParams();
  const singleUser = useSelector((state) => selectUserById(state, +userId));

  console.log(singleUser);
  if (singleUser) {
    return (
      <div className="bg-third p-4 mb-12">
        <div className="container">
          {/* username and image  */}
          <UserImageProfile singleUser={singleUser} />
          {/* the rest of details */}
          <div className="flex justify-between items-center mt-14 flex-wrap">
            <div>
              <UserProfileItem title="Email" details={singleUser.email} />
              <UserProfileItem title="Phone" details={singleUser.phone} />
              <UserProfileItem title="Website" details={singleUser.website} />
              <UserProfileItem title="Company name" details={singleUser.company.name} />
            </div>
            <div>
              <UserProfileItem title="City" details={singleUser.address.city} />
              <UserProfileItem title="Street" details={singleUser.address.street} />
              <UserProfileItem title="Suite" details={singleUser.address.suite} />
              <UserProfileItem title="ZIB Code" details={singleUser.address.zipcode} />
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
