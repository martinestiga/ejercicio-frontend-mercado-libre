import React from 'react';
import Head from 'next/head';
import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import i18Next from '../i18n';
import '../public/styles/styles.scss';

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps: AppInitialProps = await App.getInitialProps(appContext);
  const { defaultProps } = appContext.Component;

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      namespacesRequired: [...(appProps.pageProps.namespacesRequired || []), ...((defaultProps as any)?.namespacesRequired || ['common'])],
    },
  };
};

export default i18Next.appWithTranslation(MyApp);
