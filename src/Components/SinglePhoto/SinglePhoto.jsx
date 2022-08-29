import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SinglePhoto({ photo, style }) {
  return (
    <div className="bg-white mb-3 p-3 flex justify-between items-center rounded-md" style={style}>
      <h3 className="text-sm font-light md:text-md">{photo.title}</h3>
      <LazyLoadImage
        src={photo.thumbnailUrl}
        alt="photos"
        className="rounded-full w-[150px]"
        effect="blur"
      />
    </div>
  );
}

export default SinglePhoto;
export const SinglePhotoMemo = React.memo(SinglePhoto);
