// @packages
import express from 'express';

// @scripts
import MoviesService from '../services/movies.service';

const router = express.Router();
const service = new MoviesService();

router.get('/', (req, res) => {
  const products = service.find();

  if (products) res.status(200).json(products);

  res.status(404).send('Error getting the products');
});

export default router;
