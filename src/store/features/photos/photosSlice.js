import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { shallowEqual } from 'react-redux';

const USERS_URL = 'https://jsonplaceholder.typicode.com/photos';

export const photosAdapter = createEntityAdapter();

const initialState = photosAdapter.getInitialState({ error: null });

export const fetchPhotos = createAsyncThunk('posts/fetchPhotos', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      photosAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {
  selectAll: selectAllPhotos,
  selectById: selectPhotoById,
} = photosAdapter.getSelectors((state) => state.photos, shallowEqual);

export const selectPhotoError = (state) => state.photos.error;

export const selectPhotosByUser = createSelector(
  [selectAllPhotos, (state, albumId) => albumId],
  (photos, albumId) => photos.filter((photo) => photo.albumId === albumId),
);

export default photoSlice.reducer;
