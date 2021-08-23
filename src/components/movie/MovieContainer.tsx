import Template from 'components/common/template/Template';
import List from './list/List';
import { useMovieHook } from './MovieHook';

const MovieContainer = () => {
  const { movies, status, error, page, target } = useMovieHook();

  return (
    <Template>
      <List movies={movies} status={status} page={page} target={target} />
    </Template>
  );
};

export default MovieContainer;
