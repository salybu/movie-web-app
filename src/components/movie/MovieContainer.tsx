import Template from 'components/common/Template';
import List from './MovieList';
import { useMovie } from './useMovie';

const MovieContainer = () => {
  const { movies, status, error, page, target } = useMovie();

  return (
    <Template>
      <List movies={movies} status={status} page={page} target={target} />
    </Template>
  );
};

export default MovieContainer;
