import React from 'react';
import { Header, UsersList } from '../../Components';
import UserPopup from '../../Components/UserPopup/UserPopup';

function Home() {
  return (
    <div className="container">
      <Header title="USERS LIST" />
      <UsersList />
    </div>
  );
}

export default Home;
