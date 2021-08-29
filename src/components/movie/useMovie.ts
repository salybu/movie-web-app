import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, selectMovies } from 'redux/modules/movies';

export const useMovie = () => {
  const dispatch = useDispatch();
  const { movies, status, error, page } = useSelector(selectMovies);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // dispatch(getMovies);
    getMovies(dispatch, page);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1,
    };

    let observer: IntersectionObserver;
    if (target && movies?.length) {
      // if (target) {
      observer = new IntersectionObserver(onInterSecting, options);
      observer.observe(target.current as Element);
    }
    return () => observer?.disconnect();
  }, [page]);

  const onInterSecting = (entries: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) {
        return;
      }
      getMovies(dispatch, page);
    });
  };

  return {
    movies,
    status,
    error,
    page,
    target,
  };
};
