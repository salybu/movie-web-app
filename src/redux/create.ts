import { configureStore } from '@reduxjs/toolkit';
import movies from './modules/movies';

export default configureStore({
  reducer: {
    movies,
  },
});
