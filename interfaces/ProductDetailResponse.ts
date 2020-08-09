import { ProductDetail } from './ProductDetail';
import { ApiResponse } from './ApiResponse';

export interface ProductsListResponse extends ApiResponse {
  item: ProductDetail;
}
