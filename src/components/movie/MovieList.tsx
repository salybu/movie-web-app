import React, { LegacyRef } from 'react';
import { Loading, Template } from 'components/common';
import { MovieItem, useMovie } from '.';

// interface ListProps {
//   movies: Movie[] | null;
//   status: string;
//   page: number;
//   target: LegacyRef<HTMLDivElement>;
// }

const List: React.FC = (): JSX.Element => {
  const { movies, target } = useMovie();

  if (!movies) {
    return <Loading />;
  }

  return (
    <Template>
      <ul className='movie_list'>
        {movies?.map((movie) => (
          <MovieItem id={movie.id} title={movie.title} img={movie.img} year={movie.year} genres={movie.genres} />
        ))}
        <div ref={target} />
      </ul>
    </Template>
  );
};

export default List;
