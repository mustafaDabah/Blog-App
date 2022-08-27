import React from 'react';

function SinglePhoto({ photo }) {
  return (
    <div className="bg-white mb-3 p-3 flex justify-between items-center rounded-md">
      <h3 className="text-lg">{photo.title}</h3>
      <img src={photo.thumbnailUrl} alt="photos" className="rounded-full" />
    </div>
  );
}

export default SinglePhoto;
export const SinglePhotoMemo = React.memo(SinglePhoto);
