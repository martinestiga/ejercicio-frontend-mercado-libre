import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Product from './Product';
import Breadcrumb from '../Breadcrumb';
import PageContent from '../PageContent';
import { ProductsListResponse } from '../../interfaces/ProductsListResponse';
import { ProductItem } from '../../interfaces/ProductItem';
import styles from '../../public/styles/products-list.module.scss';
import i18Next from '../../i18n';
import SkeletonProduct from './SkeletonProduct';

export interface ProductsListContainerProps {
  searchQuery: string;
}

interface State {
  data: ProductsListResponse | null;
  isLoading: boolean;
  hasError: boolean;
}

function ProductsListContainer({ searchQuery }: ProductsListContainerProps): JSX.Element {
  const { t } = i18Next.useTranslation('products-list');
  const [items, setItems] = useState<State>({ data: null, isLoading: true, hasError: false });

  useEffect(() => {
    setItems({ data: null, isLoading: true, hasError: false });

    fetch(`/api/items?q=${searchQuery}`)
      .then((res) => res.json())
      .then(
        (result: ProductsListResponse) => {
          setItems({ data: result, isLoading: false, hasError: false });
        },
        () => {
          setItems({ data: null, isLoading: false, hasError: true });
        },
      );
  }, [searchQuery]);

  return (
    <>
      <Head>
        {
          items.data?.categories
          && <title>{`${items.data?.categories.join(' - ')} en Mercado Libre`}</title>
        }
      </Head>

      {items.data?.categories && <Breadcrumb categories={items.data?.categories} />}

      <PageContent className={items.data?.categories ? '' : styles['extra-space']}>
        { /* @TODO: Mostrar un boton Volver a intentar para repetir la busqueda */ }
        {items.hasError && <div className={styles.error}>{t('error-message')}</div>}
        {
          items.isLoading
          && [1, 2, 3, 4].map((item: number) => <SkeletonProduct key={item} />)
        }
        {
          !items.hasError && !items.isLoading && items.data?.items && (
            items.data.items.length === 0
              ? <div className={styles['no-results']}>{t('no-results')}</div>
              : items.data!.items.map((item: ProductItem) => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  picture={item.picture}
                  isFreeShipping={item.free_shipping}
                  address={item.address}
                />
              ))
          )
        }
      </PageContent>
    </>
  );
}

export default ProductsListContainer;
