import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ViewportList from 'react-viewport-list';
import { VariableSizeList as List } from 'react-window';

import { fetchPhotos, selectPhotosByUser } from '../../store/features/photos/photosSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SinglePhoto, { SinglePhotoMemo } from '../SinglePhoto/SinglePhoto';

function PhotosList({ albumsId }) {
//   const { userId } = useParams();
  const dispatch = useDispatch();
  const photos = useSelector((state) => selectPhotosByUser(state, albumsId));
  const ref = useRef(null);

  console.log(photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photosContent = photos.map((photo) => <SinglePhoto photo={photo} key={photo.id} />);

  return (
    <div className="scroll-container" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={photos}
        itemMinSize={1}
      >
        {(photo) => <SinglePhoto photo={photo} key={photo.id} />}
      </ViewportList>
    </div>
  );
}

export default PhotosList;

