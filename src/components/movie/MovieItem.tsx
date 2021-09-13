import { Link } from 'react-router-dom';

export interface ItemProps {
  id: number;
  title: string;
  img: string;
  year: number;
  // genres: Array<string>;
  genres: string;
}

const Item = ({ id, title, img, year, genres }: ItemProps) => {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
        <img src={img}></img>
        <div>{year}</div>
        <div>{genres}</div>
      </Link>
    </li>
  );
};

export default Item;
