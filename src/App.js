import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Home, UserDetails } from './pages';
import { HOME_PATH, USER_DETAILS_PATH } from './utilities/routesPaths';

function App() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<UserDetails />} path={USER_DETAILS_PATH} />
      </Route>
    </Routes>
  );
}

export default App;
