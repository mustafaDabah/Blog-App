import React from 'react';

function UserPopup({ item }) {
  return (
    <div className="z-10">
      <div className="bg-white absolute top-0 bottom-0 right-0  left-10 w-1/2 m-auto rounded-md shadow-sm h-[50px] flex justify-around items-center">
        <h3 className="text-lg text-primary fw-">userName: <span className="text-secondary bfont-bold">{item.username} </span></h3>
        <h3 className="text-lg text-primary fw-bold">userEmail : <span className="text-secondary bfont-bold">{item.email}</span> </h3>
      </div>
    </div>
  );
}

export default UserPopup;
