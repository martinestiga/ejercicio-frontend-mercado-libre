import { Response, ErrorRequestHandler, NextFunction, Request } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {};

export default globalErrorHandler;
