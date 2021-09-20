export interface MovieState {
  movies: Movie[] | null;
  status: string;
  error: Error | null;
  page: number;
}

export interface AuthState {
  isLogin: boolean | null;
  status: string;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  movies: MovieState;
}

export interface Movie {
  id: number;
  title: string;
  // genres: Array<string>;
  genres: string;
  img: string;
  rating: number;
  year: number;
}

export interface ISignIn {
  id: string;
  pw: string;
}

export interface ISignUp extends ISignIn {
  pwCheck: string;
  name: string;
  age: number;
  address: string;
  addressDetail: string;
}

export interface ISignUpCaution {
  pw: boolean;
  pwCheck: boolean;
}

export interface IMember {
  id: string;
  pw: string;
  name: string;
  level: string;
  address: string;
  age: number;
  cardNumber: number;
}

export interface IMovie extends ILiked {
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

export interface ILiked extends IMovieId {
  title: string;
}

export interface IToastState {
  isVisible: boolean;
  message: string;
  mode: string;
}
