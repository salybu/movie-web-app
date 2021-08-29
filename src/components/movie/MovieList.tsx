import { Movie } from 'types/types';
import React, { LegacyRef } from 'react';
import Item from './MovieItem';
import { Status } from 'utils/constants';
import { useRef } from 'react';

interface ListProps {
  movies: Movie[] | null;
  status: string;
  page: number;
  target: LegacyRef<HTMLDivElement>;
}

const List: React.FC<ListProps> = ({ movies, status, page, target }) => {
  if (movies?.length === 0) {
    return <div>영화 목록이 없습니다</div>;
  }

  // if (status === Status.Loading) {
  //   return <div>로딩 중입니다 (스피너)</div>;
  // }

  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: '0 20px' }}>
      {movies?.map((movie) => (
        <Item title={movie.title} img={movie.img} year={movie.year} genres={movie.genres} />
      ))}
      <div ref={target} />
    </ul>
  );
};

export default List;
