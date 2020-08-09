import { Response, ErrorRequestHandler, NextFunction, Request } from 'express';

const errorHandlerMiddleware: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: err.message,
  });
};

export default errorHandlerMiddleware;
