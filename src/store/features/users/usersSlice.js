import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { shallowEqual } from 'react-redux';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({ error: null });

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      usersAdapter.addMany(state, action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const selectPostError = (state) => state.users.error;

export const {
  selectEntities: selectUserEntities,
  selectIds: selectUserIds,
  selectAll: selectAllUsers,
  selectById: selectUserById,

} = usersAdapter.getSelectors((state) => state.users, shallowEqual);

export default usersSlice.reducer;
