import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, selectMovies } from 'redux/modules/movies';

export const useMovieHook = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies);
  }, []);

  return {
    movies,
    status,
    error,
  };
};
