import { Request, Response, NextFunction } from 'express';

const notFoundController = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'not found' });
};

export default notFoundController;
