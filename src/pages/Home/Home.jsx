import React from 'react';
import { Header, UsersList } from '../../Components';

function Home() {
  return (
    <div className="container">
      <Header title="USERS LIST" />
      <UsersList />
    </div>
  );
}

export default Home;
