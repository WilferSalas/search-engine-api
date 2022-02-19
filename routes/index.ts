// @packages
import express from 'express';

// @scripts
import movies from './movies.routes';

const router = express.Router();

const routerApi = (app) => {
  app.use('/api/v1', router);

  router.use('/movies', movies);
};

export default routerApi;
