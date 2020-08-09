import React from 'react';
import Breadcrumb from '../Breadcrumb';
import PageContent from '../PageContent';
import { ProductDetail as ProductDetailType } from '../../interfaces/ProductDetail';
import ProductDetail from './ProductDetail';

export interface ProductDetailContainerProps {
  item: ProductDetailType;
}

function ProductDetailContainer({ item }: ProductDetailContainerProps): JSX.Element {
  return (
    <>
      {item.categories.length && <Breadcrumb categories={item.categories} />}

      <PageContent>
        <ProductDetail
          title={item.title}
          price={item.price}
          picture={item.picture}
          condition={item.condition}
          soldQuantity={item.sold_quantity}
          description={item.description}
        />
      </PageContent>
    </>
  );
}

export default ProductDetailContainer;
