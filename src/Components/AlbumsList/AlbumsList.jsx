import React from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useGetAlbumsByIdQuery } from '../../store/features/albums/albumsSlice';
import SingleAlbums from '../SingleAlbums/SingleAlbums';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function AlbumsList() {
  const { userId } = useParams();

  const {
    data: albums = [],
  } = useGetAlbumsByIdQuery(userId);

  const albumsContent = albums?.map((album) => (
    <LazyLoadComponent key={album.id}>
      <SingleAlbums album={album} />
    </LazyLoadComponent>
  ));

  return (
    <div>
      {!albums.length ? (<LoadingSpinner />) : albumsContent}
    </div>
  );
}

export default AlbumsList;
