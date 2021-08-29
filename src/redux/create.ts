import { configureStore } from '@reduxjs/toolkit';
import movies from './modules/movies';
import auth from './modules/auth';

export default configureStore({
  reducer: {
    movies,
    auth,
  },
});
