import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { fetchAlbums, selectAlbumsByUser } from '../../store/features/albums/albumsSlice';
import SingleAlbums from '../SingleAlbums/SingleAlbums';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function AlbumsList() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((state) => selectAlbumsByUser(state, +userId));

  useEffect(() => {
    dispatch(fetchAlbums()).unwrap();
  }, [dispatch]);

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
