import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="es-AR">
        <Head>
          <meta name="theme-color" content="#ffe600" />
          <link rel="shortcut icon" href="https://http2.mlstatic.com/ui/navigation/5.8.0/mercadolibre/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
