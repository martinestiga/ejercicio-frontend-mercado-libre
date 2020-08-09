import { Price } from './Price';
import { Condition } from './Condition';

export interface ProductDetail {
  id: string;
  title: string;
  price: Price,
  picture: string;
  condition: Condition;
  free_shipping: boolean;
  sold_quantity: number;
  description: string
  categories: string[];
}
