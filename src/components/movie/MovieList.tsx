import { Movie } from 'types/types';
import React, { LegacyRef } from 'react';
import Item from './MovieItem';
import { Loading } from 'components/common';

interface ListProps {
  movies: Movie[] | null;
  status: string;
  page: number;
  target: LegacyRef<HTMLDivElement>;
}

const List: React.FC<ListProps> = ({ movies, status, page, target }) => {
  if (!movies) {
    return <Loading />;
  }

  return (
    // <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: '0 20px' }}>
    <ul className='movie_list'>
      {movies?.map((movie) => (
        <Item id={movie.id} title={movie.title} img={movie.img} year={movie.year} genres={movie.genres} />
      ))}
      <div ref={target} />
    </ul>
  );
};

export default List;
