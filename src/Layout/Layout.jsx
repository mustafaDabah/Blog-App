import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLayout from './Navbar/NavbarLayout';

function Layout({ children }) {
  return (
    <div>
      <NavbarLayout />
      <Outlet />
    </div>
  );
}

export default Layout;
