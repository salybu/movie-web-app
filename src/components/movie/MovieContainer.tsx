import Template from 'components/common/template/Template';
import List from './list/List';
import { useMovieHook } from './MovieHook';

const MovieContainer = () => {
  const { movies, status, error } = useMovieHook();

  return (
    <Template>
      <List movies={movies} />
    </Template>
  );
};

export default MovieContainer;
