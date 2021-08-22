const MOVIE_API_URL = 'https://yts.mx/api/v2/list_movies.json';

export default class MovieService {
  public static async getMovies() {
    const response = await fetch(MOVIE_API_URL);
    const data = response.json();
    return data;
  }
}
