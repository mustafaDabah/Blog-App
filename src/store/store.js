import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './features/users/usersSlice';
import postsReducer from './features/posts/postSlice';
import commentsReducer from './features/comments/commentsSlice';
import albumsReducer from './features/albums/albumsSlice';
import photosReducer from './features/photos/photosSlice';

export const rootReducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const setupStore = (preloadedState) => configureStore({
  reducer: rootReducers,
  preloadedState,
});

