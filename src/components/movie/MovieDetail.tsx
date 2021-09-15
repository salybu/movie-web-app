import { useEffect, useState } from 'react';
import { MovieService } from '.';
import { ItemProps } from './MovieItem';
import { Loading, Template } from 'components/common';
import { printGenres } from 'utils/movie';
import { BsHeartFill, BsFillStarFill } from 'react-icons/bs';
import { MdNotInterested } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { storage } from 'utils/storage';
import { getMoviesButtonState, pushMovieButton } from 'utils/api';
import { USER } from 'utils/constants';
import { ILiked, IMovie, IMovieId } from 'types/types';

const LIKE = 'like';
const NOTINTERESTED = 'notInterested';

const MovieDetail: React.FC<IMovieId> = ({ id }) => {
  const [movie, setMovie] = useState<IMovie | null>();
  const [movieList, setMovieList] = useState<ItemProps[]>([]);

  const [liked, setLiked] = useState<boolean>(false);
  const [notInterested, setNotInterested] = useState<boolean>(false);

  const { location } = useHistory();

  useEffect(() => {
    // setMovie(null);
    // setMovieList([]);
    getMovie(id);
    suggestMovie(id);
    setPrevMovieState(storage.get(USER), id);
  }, [location]);

  const getMovie = async (id: number) => {
    const resMovie = await MovieService.getMovie(id);
    const { title, year, medium_cover_image, background_image_original, description_full, genres, rating, runtime } = resMovie.data.movie;
    const movie = {
      id,
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

  const setPrevMovieState = async (memberId: string, id: number) => {
    const like = await getMoviesButtonState(LIKE, memberId);
    like?.movie.forEach((movie: ILiked) => {
      if (movie.id == id) {
        setLiked(true);
      }
    });
    const notInterested = await getMoviesButtonState(NOTINTERESTED, memberId);
    notInterested?.movie.forEach((movie: ILiked) => {
      if (movie.id == id) {
        setNotInterested(true);
      }
    });
  };

  const likeMovie = async (id: number, title: string) => {
    setLiked(!liked);
    await pushMovieButton(LIKE, storage.get(USER), id, title, !liked);
  };

  const notInterestedMovie = async (id: number, title: string) => {
    setNotInterested(!notInterested);
    await pushMovieButton(NOTINTERESTED, storage.get(USER), id, title, !notInterested);
  };

  if (!movie || !movieList) {
    return <Loading />;
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
          <p>{movie.runtime} min</p>
          <p>{movie.genres}</p>
          <p>
            <button
              className={liked ? 'like_btn_active' : 'like_btn'}
              onClick={() => {
                likeMovie(Number(movie.id), movie.title);
              }}
            >
              <BsHeartFill /> Like
            </button>
            <button
              className={notInterested ? 'not_interested_btn_active' : 'not_interested_btn'}
              onClick={() => {
                notInterestedMovie(Number(movie.id), movie.title);
              }}
            >
              <MdNotInterested /> Not Interested
            </button>
          </p>
        </div>
      </article>
      <article className='movie_recommend' style={{ padding: '0 1rem' }}>
        <h2 style={{ marginBottom: '0' }}>Other Recommended Movie</h2>
        <ul style={{ display: 'flex', margin: '0', padding: '0 0 3rem' }}>
          {movieList.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
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
