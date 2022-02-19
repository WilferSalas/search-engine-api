// @packages
import express from 'express';

// @scripts
import MoviesService from '../services/movies.service';

const router = express.Router();
const service = new MoviesService();

router.post('/', (req, res) => {
  const { body: { searchTerm } } = req;

  const movieTitles = service.find(searchTerm);

  if (movieTitles) res.status(201).json(movieTitles);

  res.status(404).send('Error getting movie titles');
});

router.get('/:id', (req, res) => {
  const { params: { id } } = req;

  const movie = service.findOne(id);

  if (movie) res.status(200).json(movie);

  res.status(404).send('Movie not found');
});

export default router;
