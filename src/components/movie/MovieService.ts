const MOVIE_API_URL = 'https://yts.mx/api/v2/list_movies.json';

export default class MovieService {
  public static async getMovies(page: number) {
    const limit = 15;
    try {
      const response = await fetch(MOVIE_API_URL + `?limit=${limit}&page=${page}`);
      const data = response.json();
      return data;
    } catch (error) {
      // error Alert 를 띄우던지 어쩌던지
      return null;
    }
  }
}
