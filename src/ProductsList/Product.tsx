import React from 'react';
import styles from '../../public/styles/product.module.scss';
import { Price } from '../../interfaces/Price';
import i18Next from '../../i18n';
import { withThousandSeparator } from '../utils/price';

export interface ProductProps {
  id: string;
  title: string;
  price: Price;
  picture: string;
  isFreeShipping: boolean;
  address: string;
}

function Product({ id, title, price, picture, isFreeShipping, address }: ProductProps): JSX.Element {
  const { t } = i18Next.useTranslation('products-list');

  const formattedPriceAmount: string = withThousandSeparator(price.amount);
  const detailUrl = `/items/${id}`;

  return (
    <div className={styles.container}>
      <div>
        <a href={detailUrl}>
          <img className={styles.image} width="180" height="180" alt={title} src={picture} />
        </a>
      </div>
      <div className={styles['info-container']}>
        <div className={styles.info}>
          <div className={styles['price-container']}>
            <span className={styles.price}>
              <span className={styles['price-symbol']}>{price.currency}</span>
              <span className="price-fraction">{formattedPriceAmount}</span>
            </span>
            { isFreeShipping && <img title={t('free-shipping')} className={styles['free-shipping-icon']} height="18" width="18" src="/assets/ic_shipping@2x.png" alt={t('free-shipping')} /> }
          </div>
          <h2>
            <a href={detailUrl}>{title}</a>
          </h2>
        </div>
        <div className={styles.address}>{address}</div>
      </div>
    </div>
  );
}

export default Product;
