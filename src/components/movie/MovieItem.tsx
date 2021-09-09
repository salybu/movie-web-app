import { useHistory } from 'react-router';

export interface ItemProps {
  id: number;
  title: string;
  img: string;
  year: number;
  // genres: Array<string>;
  genres: string;
}

const Item = ({ id, title, img, year, genres }: ItemProps) => {
  const history = useHistory();

  const moveToMovie = (id: number) => {
    history.push(`/movie/${id}`);
  };

  return (
    <li
      style={{ textDecoration: 'none', width: '365px', textAlign: 'center' }}
      onClick={() => {
        moveToMovie(id);
      }}
    >
      <h2>{title}</h2>
      <img src={img}></img>
      <div>{year}</div>
      <div>{genres}</div>
    </li>
  );
};

export default Item;
