import { Price } from './Price';
import { Condition } from './Condition';

export interface ProductItem {
  id: string;
  title: string;
  price: Price,
  picture: string;
  condition: Condition;
  free_shipping: boolean;
  address: string;
}
