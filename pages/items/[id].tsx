import React from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import Layout from '../../src/Layout';
import itemDetailsService from '../../server/api/services/itemDetailsService';
import ProductDetailContainer from '../../src/ProductDetail/ProductDetailContainer';
import { ProductDetail } from '../../interfaces/ProductDetail';
import Custom404 from '../404';

type Params = { id: string };

type Props = { item: ProductDetail | null };

const ProductDetailPage = ({ item }: Props): JSX.Element => {
  if (!item) {
    return <Custom404 />;
  }

  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: item.title,
    image: [item.picture],
    description: item.description,
    offers: {
      '@type': 'Offer',
      price: item.price.amount,
    },
  };

  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content={item.description} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <meta property="og:title" content={item.title} />
        <meta property="og:type" content="product" />
        <meta property="og:description" content={item.description} />
        <meta property="og:image" content={item.picture} />
      </Head>
      <Layout>
        <ProductDetailContainer item={item} />
      </Layout>
    </>
  );
};

ProductDetailPage.defaultProps = {
  namespacesRequired: ['common', 'product-detail'],
};

export async function getServerSideProps({ params, res }: GetServerSidePropsContext<Params>) {
  let item: ProductDetail | null = null;

  try {
    item = await itemDetailsService.getItemDetails(params!.id as string);
  } catch (error) {
    res.statusCode = 404;
  }

  return { props: { item } };
}

export default ProductDetailPage;
