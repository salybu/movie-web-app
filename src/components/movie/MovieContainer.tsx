import { Template } from 'components/common';
import { List, useMovie } from '.';

const MovieContainer = () => {
  const { movies, status, error, page, target } = useMovie();

  return (
    <Template>
      <List movies={movies} status={status} page={page} target={target} />
    </Template>
  );
};

export default MovieContainer;
