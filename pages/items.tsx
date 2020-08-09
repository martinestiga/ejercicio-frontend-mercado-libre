import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import ProductsListContainer from '../src/ProductsList/ProductsListContainer';
import Layout from '../src/Layout';

const ProductsListPage = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const [searchQuery, setSearchQuery] = useState(router.query.search as string || '');

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const [_, queryString] = url.split('?');

      const urlParams: URLSearchParams = new URLSearchParams(queryString);

      const value: string | null = urlParams.get('search');

      if (value) {
        setSearchQuery(value);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const changeSearchQuery = (value: string): void => {
    router.push({ query: { search: value } });
  };

  return (
    <>
      <Head>
        <title>{searchQuery || 'Mercado Libre'}</title>
      </Head>
      <Layout searchQuery={searchQuery} changeSearchQuery={changeSearchQuery}>
        { searchQuery && <ProductsListContainer searchQuery={searchQuery} /> }
      </Layout>
    </>
  );
};

ProductsListPage.defaultProps = {
  namespacesRequired: ['common', 'products-list'],
};

export default ProductsListPage;
