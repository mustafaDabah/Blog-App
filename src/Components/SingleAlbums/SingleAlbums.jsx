import React from 'react';
import { CollapseMemo } from '../Collapse/Collapse';
import PhotosList, { PhotosListMemo } from '../PhotosList/PhotosList';

function SingleAlbums({ album }) {
  console.log('single albums');
  return (
    <div className="bg-white p-3 mb-3 rounded-md">
      <h3 className="capitalize border-b-2 pb-2 text-sm font-bold md:text-md">{album.title}</h3>
      <CollapseMemo title="user photos" defaultExpanded={false}>
        <PhotosListMemo albumsId={album.id} />
      </CollapseMemo>
    </div>
  );
}

export default SingleAlbums;
export const SingleAlbumsMemo = React.memo(SingleAlbums);
