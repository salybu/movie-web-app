import { useEffect, useState } from 'react';
import { MovieService } from '.';
import { ItemProps } from './MovieItem';
import { Template } from 'components/common';
import { printGenres } from 'utils/movie';
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs';
import { MdNotInterested } from 'react-icons/md';
import { Link } from 'react-router-dom';

export interface IMovie {
  title: string;
  year: number;
  description: string;
  coverImg: string;
  backgroundImg: string;
  // genres: string[];
  genres: string;
  rating: number;
  runtime: number;
}

export interface IMovieId {
  id: number;
}

const MovieDetail: React.FC<IMovieId> = ({ id }) => {
  const [movie, setMovie] = useState<IMovie>();
  const [movieList, setMovieList] = useState<ItemProps[]>([]);

  const serviceMovie = async (id: number) => {
    const resMovie = await MovieService.getMovie(id);
    const { title, year, medium_cover_image, background_image_original, description_full, genres, rating, runtime } = resMovie.data.movie;
    const movie = {
      title,
      year,
      description: description_full,
      coverImg: medium_cover_image,
      backgroundImg: background_image_original,
      genres: printGenres(genres),
      rating,
      runtime,
    };
    setMovie(movie);
  };

  const suggestMovie = async (id: number) => {
    const resSugg = await MovieService.getMovieSuggestion(id);
    let movieList = resSugg.data.movies;
    movieList = movieList.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      img: movie.medium_cover_image,
      genres: printGenres(movie.genres),
      year: movie.year,
      rating: movie.rating,
    }));
    setMovieList(movieList);
  };

  useEffect(() => {
    serviceMovie(id);
    suggestMovie(id);
  }, []);

  if (!movie || !movieList) {
    return <Template>로딩 중</Template>;
  }

  return (
    <Template>
      <article className='movie_background'>
        <h3>{movie.description}</h3>
        <div style={{ backgroundImage: `url(${movie.backgroundImg})` }}></div>
      </article>
      <article className='movie_info'>
        <img src={movie.coverImg} alt='movie poster' />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.year}</p>
          <p>
            <BsFillStarFill /> {movie.rating}
          </p>
          <p>{movie.runtime} 분</p>
          <p>{movie.genres}</p>
          <p>
            <button className='like_btn'>
              <BsHeartFill /> 좋아요
            </button>
            <button className='not_interested_btn'>
              <MdNotInterested /> 관심없음
            </button>
          </p>
        </div>
      </article>
      <article className='movie_recommend' style={{ padding: '0 1rem' }}>
        <h2 style={{ marginBottom: '0' }}>관련 추천 영화</h2>
        <ul style={{ display: 'flex', margin: '0', padding: '0 0 3rem' }}>
          {movieList.map((movie) => (
            <Link to={`/movie/${id}`}>
              <li style={{ textDecoration: 'none', width: '280px', textAlign: 'center' }}>
                <h2>{movie.title}</h2>
                <img src={movie.img}></img>
                <div>{movie.year}</div>
                <div>{movie.genres}</div>
              </li>
            </Link>
          ))}
        </ul>
      </article>
    </Template>
  );
};

export default MovieDetail;
