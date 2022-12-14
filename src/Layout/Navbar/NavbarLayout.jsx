import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../utilities/routesPaths';

function NavbarLayout() {
  return (
    <div className="bg-third w-full h-12 flex items-center">
      <div className="container">
        <Link to={HOME_PATH}>
          <p className="text-white text-lg">Blog App</p>
        </Link>
      </div>
    </div>
  );
}

export default NavbarLayout;
