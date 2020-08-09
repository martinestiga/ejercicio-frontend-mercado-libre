import { NextFunction, Response, RequestHandler } from 'express';
import config from 'config';
import { Author } from '../../../interfaces/Author';

// override the json() express function to add to each answer a signature with the key "author"
const responseSignatureMiddleware: RequestHandler = (_, res: Response, next: NextFunction) => {
  const originalJson = res.json;

  const author: Author = config.get('author');

  (res as any).json = function json(data: any) {
    const response: any = {
      author,
      ...data,
    };

    return originalJson.call(this, response);
  };

  next();
};

export default responseSignatureMiddleware;
