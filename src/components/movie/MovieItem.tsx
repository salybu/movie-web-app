interface ItemProps {
  title: string;
  img: string;
  year: number;
  genres: Array<string>;
}

const Item = ({ title, img, year, genres }: ItemProps) => {
  return (
    <li style={{ textDecoration: 'none', width: '365px', textAlign: 'center' }}>
      <h2>{title}</h2>
      <img src={img}></img>
      <div>{year}</div>
      <div>{genres}</div>
    </li>
  );
};

export default Item;
