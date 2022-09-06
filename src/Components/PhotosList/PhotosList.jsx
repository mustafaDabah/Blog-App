import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useGetPhotosByIdQuery } from '../../store/features/photos/photosSlice';
import SinglePhoto from '../SinglePhoto/SinglePhoto';

function PhotosList({ albumsId }) {
  const { data: photos } = useGetPhotosByIdQuery(albumsId);

  const photosContent = photos?.map((photo) => <SinglePhoto photo={photo} key={photo.id} />);

  return (
    <LazyLoadComponent>
      {photosContent}
    </LazyLoadComponent>
  );
}

export default PhotosList;
export const PhotosListMemo = React.memo(PhotosList);
