import React from 'react';
import { CollapseMemo } from '../Collapse/Collapse';
import PhotosList from '../PhotosList/PhotosList';

function SingleAlbums({ album }) {
  console.log('single albums');
  return (
    <div className="bg-white p-3 mb-3 rounded-md">
      <h3 className="capitalize border-b-2 pb-2">{album.title}</h3>
      <CollapseMemo title="user photos" defaultExpanded={false}>
        <PhotosList albumsId={album.id} />
      </CollapseMemo>
    </div>
  );
}

export default SingleAlbums;
export const SingleAlbumsMemo = React.memo(SingleAlbums);
