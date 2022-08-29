import React from 'react';

function UserProfileItem({ title, details }) {
  return (
    <h3 className="text-forth text-md md:text-xl font-light mb-4">{title}: <span className="font-medium">{details}</span></h3>
  );
}

export default UserProfileItem;
