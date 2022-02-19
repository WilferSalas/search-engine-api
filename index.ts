// @packages
import express from 'express';

// @scripts
import routerApi from './routes';

const app = express();
const port = 3001;

// @middlewares
app.use(express.json());

// @routes
routerApi(app);

app.get('/', (_, res) => res.json('Hello from Express'));

app.listen(port, () => console.log(`Listening on port ${port}`));
