import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ViewportList from 'react-viewport-list';
import { VariableSizeList as List } from 'react-window';

import { LazyLoadComponent } from 'react-lazy-load-image-component';
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
    dispatch(fetchPhotos({ id: albumsId }));
  }, [dispatch]);

  const photosContent = photos.map((photo) => <SinglePhoto photo={photo} key={photo.id} />);

  return (
    <LazyLoadComponent>
      {photosContent}
    </LazyLoadComponent>
  );
}

export default PhotosList;

/*
 <div className="scroll-container" ref={ref}>
      <ViewportList
        viewportRef={ref}
        items={photos}
        itemMinSize={1}
      >
        {(photo) => <SinglePhoto photo={photo} key={photo.id} />}
      </ViewportList>
    </div>
*/

/*
 <List
      height={150}
      itemCount={photos}
      itemSize={5}
      width={300}
    >
      {(photo) => <SinglePhoto photo={photo} key={photo.id} />}
    </List>
*/
