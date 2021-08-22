export interface MovieState {
  movies: Movie[] | null;
  status: string;
  error: Error | null;
}

export interface RootState {
  movies: MovieState;
}

export interface Movie {
  id: number;
  title: string;
  genres: Array<string>;
  img: string;
  rating: number;
  year: number;
}
