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

  find(serachTerm) {
    return this.movies.filter((item) =>
      item.title.toLocaleLowerCase().includes(serachTerm?.toLocaleLowerCase()));
  };

  findOne(id) {
    return this.movies.find(movie => movie.id === id);
  };

  findOneSimilar(serachTerm) {
    return this.movies.filter((item) =>
      item.title.toLocaleLowerCase().includes(serachTerm?.toLocaleLowerCase())).slice(0, 4);
  };
};

export default MoviesService;
