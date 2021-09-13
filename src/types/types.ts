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
  pwConfirm: string;
  name: string;
  age: number;
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
