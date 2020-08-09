import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandler';
import responseSignatureMiddleware from './middlewares/responseSignature';
import itemDetailsController from './controllers/itemDetailsController';
import itemsListController from './controllers/itemsListController';
import notFoundController from './controllers/notFoundController';

const apiRouter = express.Router();

apiRouter.use(responseSignatureMiddleware);

apiRouter.get('/items/:id', itemDetailsController);

apiRouter.get('/items', itemsListController);

apiRouter.get('*', notFoundController);

apiRouter.use(errorHandlerMiddleware);

export default apiRouter;
