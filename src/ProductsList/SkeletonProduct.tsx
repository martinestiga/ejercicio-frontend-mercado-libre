import React from 'react';
import productStyles from '../../public/styles/product.module.scss';
import skeletonStyles from '../../public/styles/skeleton.module.scss';

function SkeletonProduct(): JSX.Element {
  return (
    <div className={`${productStyles.container} ${productStyles['-skeleton']}`}>
      <div>
        <img className={`${productStyles.image} ${skeletonStyles['skeleton-img']}`} width="180" height="180" alt="Skeleton" src="/assets/transparent.png" />
      </div>
      <div className={productStyles['info-container']}>
        <div className={productStyles.info}>
          <div className={`${productStyles['price-container']} ${skeletonStyles['skeleton-text']}`}>
            <span className={productStyles.price}>&nbsp;</span>
          </div>
          <h2 className={skeletonStyles['skeleton-text']}>&nbsp;</h2>
        </div>
        <div className={productStyles.address}>&nbsp;</div>
      </div>
    </div>
  );
}

export default SkeletonProduct;
