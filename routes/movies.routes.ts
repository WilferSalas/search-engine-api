// @packages
import express from 'express';

// @scripts
import MoviesService from '../services/movies.service';

const router = express.Router();
const service = new MoviesService();

router.get('/', (_, res) => {
  const movies = service.find();

  if (movies) res.status(200).json(movies);

  res.status(404).send('Error getting the movies');
});

router.get('/:id', (req, res) => {
  const { params: { id } } = req;

  const movie = service.findOne(id);

  if (movie) res.status(200).json(movie);

  res.status(404).send('Movie not found');
});

router.post('/similar', (req, res) => {
  const { body: { serachTerm } } = req;

  const movieTitles = service.findSimilar(serachTerm);

  if (movieTitles) res.status(201).json(movieTitles);

  res.status(404).send('Error getting movie titles');
});

export default router;
