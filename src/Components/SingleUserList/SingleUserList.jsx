import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPopup from '../UserPopup/UserPopup';

function SingleUserList({ item }) {
  const [open, setOpen] = useState(false);

  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <div className="text-center text-forth mb-4 relative">
      <div className="flex text-left items-center">
        <Link to={`${item.id}`}>
          <h3
            className="text-2xl cursor-pointer"
            onMouseEnter={openPopup}
            onMouseLeave={closePopup}
          ><span className="">{item.id}</span> -  {item.name}
          </h3>
        </Link>
      </div>
      {open && <UserPopup item={item} closePopup={closePopup} />}
    </div>
  );
}

export default SingleUserList;
