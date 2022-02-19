// @mock-data
import data from "../data/mock/mock-data.json";

// @types
type movie = {
  description: string;
  id: string;
  image: string;
  shortDescription: string;
  title: string;
}[]

class MoviesService {
  movies: movie;
  constructor() {
    this.movies = data;
  };

  find() {
    return this.movies;
  };
};

export default MoviesService;
