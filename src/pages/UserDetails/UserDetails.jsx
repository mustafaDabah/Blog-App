import React from 'react';
import { AlbumsSection, Header, PostsSection, UserProfile } from '../../Components';

function UserDetails() {
  return (
    <div className="h-[1500px] max-h-full">
      <Header title="USER PROFILE PAGE" />
      <UserProfile />
      <PostsSection />
      <AlbumsSection />
    </div>
  );
}

export default UserDetails;
