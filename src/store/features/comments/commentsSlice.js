import { createAsyncThunk, createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import { shallowEqual } from 'react-redux';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

export const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState({ error: null });

export const fetchComments = createAsyncThunk('comments/fetchComments', async (initialComment) => {
  const response = await axios.get(`${COMMENTS_URL}?postId=${initialComment.id}`);
  return response.data;
});

export const updateComment = createAsyncThunk('comments/updateComment', async (initialComment) => {
  const response = await axios.put(`${COMMENTS_URL}/${initialComment.id}`, initialComment);
  return response.data;
});

export const deleteComment = createAsyncThunk('comments/deleteComment', async (initialComment) => {
  const response = await axios.delete(`${COMMENTS_URL}/${initialComment.id}`, initialComment);
  if (response?.status === 200) return initialComment;
  return `${response?.status}: ${response?.statusText}`;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      commentsAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      commentsAdapter.updateOne(state, action.payload);
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      commentsAdapter.removeOne(state, action.payload.id);
    });
  },
});

export const {
  selectAll: selectAllComments,
  selectById: selectCommentsById,
} = commentsAdapter.getSelectors((state) => state.comments, shallowEqual);

export const selectCommentError = (state) => state.comments.error;

export const { increaseCount } = commentsSlice.actions;

export const selectCommentsByPost = createSelector(
  [selectAllComments, (state, postId) => postId],
  (comments, postId) => comments.filter((comment) => comment.postId === postId),
);

export default commentsSlice.reducer;
