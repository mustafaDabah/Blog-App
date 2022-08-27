import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { shallowEqual } from 'react-redux';

const USERS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({ error: null });

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
} = postsAdapter.getSelectors((state) => state.posts, shallowEqual);

export const selectPostError = (state) => state.posts.error;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId),
);

export default postsSlice.reducer;
