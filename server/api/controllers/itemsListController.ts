import { Request, Response, NextFunction } from 'express';
import itemsListService from '../services/itemsListService';
import MLApiError from '../types/MLApiError';

const itemsListController = async (req: Request, res: Response, next: NextFunction) => {
  if (typeof req.query.q !== 'string') {
    next(new Error('Invalid search query parameter'));
  }

  try {
    const itemsData = await itemsListService.getItemsList(req.query.q as string);
    res.json({ ...itemsData });
  } catch (error) {
    let errorMessage = 'An error occurred while trying to get products list';

    if (error instanceof MLApiError) {
      errorMessage = error.message;
    }

    next(new Error(errorMessage));
  }
};

export default itemsListController;
