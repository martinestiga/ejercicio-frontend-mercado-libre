import { Request, Response, RequestHandler, NextFunction } from 'express';
import itemDetailsService from '../services/itemDetailsService';
import { ProductDetail } from '../../../interfaces/ProductDetail';
import MLApiError from '../types/MLApiError';

const itemDetailsController: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item: ProductDetail = await itemDetailsService.getItemDetails(req.params.id);
    res.json({ item });
  } catch (error) {
    let errorMessage = 'An error occurred while trying to get product detail';

    if (error instanceof MLApiError) {
      errorMessage = error.message;
    }

    next(new Error(errorMessage));
  }
};

export default itemDetailsController;
