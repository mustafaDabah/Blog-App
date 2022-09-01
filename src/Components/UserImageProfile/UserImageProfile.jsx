import React from 'react';
import Avator from '../../Assets/images/avator.png';

function UserImageProfile({ singleUser }) {
  return (
    <div className="flex items-center">
      <img src={Avator} aria-hidden alt="user image." className="w-1/3 md:w-1/5" />
      <div>
        <h3 className="text-forth text-xl ml-4">{singleUser.name}</h3>
        <h3 className="text-gray-300 text-md ml-4 italic">@{singleUser.username}</h3>
      </div>
    </div>
  );
}

export default UserImageProfile;
