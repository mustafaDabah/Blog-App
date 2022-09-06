import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './API/apiSlice';
import commentsReducer from './features/comments/commentsSlice';

export const rootReducers = combineReducers({
  comments: commentsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  preloadedState,
});

