import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { fetchPhotos, selectPhotosByUser } from '../../store/features/photos/photosSlice';
import SinglePhoto from '../SinglePhoto/SinglePhoto';

function PhotosList({ albumsId }) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => selectPhotosByUser(state, albumsId));

  console.log(photos);

  useEffect(() => {
    dispatch(fetchPhotos({ id: albumsId }));
  }, [dispatch, albumsId]);

  const photosContent = photos.map((photo) => <SinglePhoto photo={photo} key={photo.id} />);

  return (
    <LazyLoadComponent>
      {photosContent}
    </LazyLoadComponent>
  );
}

export default PhotosList;
export const PhotosListMemo = React.memo(PhotosList);
