import { Movie } from 'types/types';
import React from 'react';
import Item from '../item/Item';

interface ListProps {
  movies: Movie[] | null;
}

const List: React.FC<ListProps> = ({ movies }) => {
  if (movies?.length === 0) {
    return <div>영화 목록이 없습니다</div>;
  }

  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: '0 20px' }}>
      {movies?.map((movie) => (
        <Item title={movie.title} img={movie.img} year={movie.year} genres={movie.genres} />
      ))}
    </ul>
  );
};

export default List;
