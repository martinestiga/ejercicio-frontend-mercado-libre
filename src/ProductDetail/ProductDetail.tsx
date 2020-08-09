import React from 'react';
import i18Next from '../../i18n';
import styles from '../../public/styles/product-detail.module.scss';
import { withThousandSeparator } from '../utils/price';
import { Price } from '../../interfaces/Price';

export interface ProductDetailProps {
  title: string;
  price: Price,
  picture: string;
  condition: 'not_specified' | 'new' | 'used';
  soldQuantity: number;
  description: string
}

function ProductDetail({ title, price, picture, condition, soldQuantity, description }: ProductDetailProps): JSX.Element {
  const { t } = i18Next.useTranslation('product-detail');

  const formattedPriceAmount: string = withThousandSeparator(price.amount);
  const formattedPriceDecimals: string = price.decimals.toString().padStart(2, '0');
  const hasCondition: boolean = condition !== 'not_specified';
  const hasSoldQuantity: boolean = soldQuantity > 0;
  const hasLongAmount: boolean = formattedPriceAmount.length > 7;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles['left-col']}>
          <div className={styles.pictures}>
            <img src={picture} alt={title} />
          </div>
        </div>
        <div className={styles['right-col']}>
          <section className={styles['main-info']}>
            <div className={styles['title-info']}>
              { hasCondition && t(condition) }
              { hasCondition && hasSoldQuantity && ' - ' }
              { hasSoldQuantity && `${soldQuantity} ${t('sold')}` }
            </div>
            <h1>{title}</h1>
            <div className={`${styles.price} ${hasLongAmount ? styles['-long'] : ''}`}>
              <span className={styles['price-symbol']}>{price.currency}</span>
              <span>{formattedPriceAmount}</span>
              <span className={styles['price-cents']}>{formattedPriceDecimals}</span>
            </div>
            <button type="button">{t('buy-button')}</button>
          </section>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles['left-col']}>
          {
            description
            && (
            <section className={styles.description}>
              <h2>{t('description-title')}</h2>
              <p>{description}</p>
            </section>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
