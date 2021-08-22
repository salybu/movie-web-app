import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { Status } from 'constants/constants';
import { MovieState, RootState } from 'types/types';
import MovieService from 'components/movie/MovieService';

const initialState: MovieState = {
  movies: null,
  status: Status.Idle,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMoviesStart(state, action) {
      state.error = null;
      state.status = Status.Loading;
    },
    getMoviesSuccess(state, action) {
      const movies = action.payload;
      state.movies = movies;
      state.status = Status.Success;
    },
    getMoviesFailure(state, action) {
      state.status = Status.Failure;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;

export const { getMoviesStart, getMoviesSuccess, getMoviesFailure } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies;

// 비동기 메소드
export const getMovies = async (dispatch: Dispatch) => {
  try {
    dispatch(getMoviesStart(null));
    const data = await MovieService.getMovies();
    const moviesOrigin = data.data.movies;
    const movies = moviesOrigin.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      img: movie.medium_cover_image,
      genres: movie.genres,
      year: movie.year,
      rating: movie.rating,
    }));
    console.log(movies);
    dispatch(getMoviesSuccess(movies));
  } catch {}
};
