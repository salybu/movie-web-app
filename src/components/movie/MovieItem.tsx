import { useHistory } from 'react-router';

interface ItemProps {
  id: number;
  title: string;
  img: string;
  year: number;
  genres: Array<string>;
}

const Item = ({ id, title, img, year, genres }: ItemProps) => {
  const history = useHistory();
  let genrePrint: string = '';
  genres.map((genre, index) => {
    genrePrint += index !== genres.length - 1 ? genre + ', ' : genre;
  });

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
      <div>{genrePrint}</div>
      <div>{id}</div>
    </li>
  );
};

export default Item;
