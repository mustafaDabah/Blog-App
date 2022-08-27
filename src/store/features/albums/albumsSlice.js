import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { shallowEqual } from 'react-redux';

const USERS_URL = 'https://jsonplaceholder.typicode.com/albums';

export const albumsAdapter = createEntityAdapter();

const initialState = albumsAdapter.getInitialState({ error: null });

export const fetchAlbums = createAsyncThunk('posts/fetchAlbums', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      albumsAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {
  selectAll: selectAllAlbums,
  selectById: selectAlbumsById,
} = albumsAdapter.getSelectors((state) => state.posts, shallowEqual);

export const selectAlbumsError = (state) => state.albums.error;

export const selectAlbumsByUser = createSelector(
  [selectAllAlbums, (state, userId) => userId],
  (albums, userId) => albums.filter((post) => post.userId === userId),
);

export default albumsSlice.reducer;
