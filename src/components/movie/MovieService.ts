const MOVIE_API_URL = 'https://yts.mx/api/v2/';

export default class MovieService {
  public static async getMovies(page: number) {
    const limit = 15;
    try {
      const response = await fetch(MOVIE_API_URL + `list_movies.json?limit=${limit}&page=${page}`);
      const data = response.json();
      return data;
    } catch (error) {
      return null;
    }
  }

  public static async getMovie(id: number) {
    try {
      const response = await fetch(MOVIE_API_URL + `movie_details.json?movie_id=${id}`);
      const data = response.json();
      return data;
    } catch (error) {
      return null;
    }
  }

  public static async getMovieSuggestion(id: number) {
    try {
      const response = await fetch(MOVIE_API_URL + `movie_suggestions.json?movie_id=${id}`);
      const data = response.json();
      return data;
    } catch (error) {
      return null;
    }
  }
}
