import next from 'next';
import path from 'path';
import express, { Application } from 'express';
import config from 'config';
import apiRouter from './api/routes';
import globalErrorHandler from './globalErrorHandler';

const port = process.env.PORT || 3000;
const dev: boolean = process.env.NODE_ENV !== 'production';
const publicPath: string = config.get('publicPath');

const app = next({ dev });
const nextPagesHandler = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server: Application = express();

  server.use('/assets', express.static(path.join(publicPath, '/assets'), {
    maxAge: '1y',
  }));

  server.use('/api', apiRouter);

  server.get('*', (req, res) => nextPagesHandler(req, res));

  server.use(globalErrorHandler);

  server.listen(port);

  // eslint-disable-next-line no-console
  console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
})();
