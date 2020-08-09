import { ProductItem } from './ProductItem';
import { ApiResponse } from './ApiResponse';

export interface ProductsListResponse extends ApiResponse {
  categories: string[];
  items: ProductItem[];
}
