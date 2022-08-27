import React from 'react';
import AlbumsList from '../AlbumsList/AlbumsList';
import { CollapseMemo } from '../Collapse/Collapse';

function AlbumsSection() {
  console.log('AlbumsSection');
  return (
    <div className="container mt-3">
      <CollapseMemo title="user albums">
        <AlbumsList />
      </CollapseMemo>
    </div>
  );
}

export default AlbumsSection;
