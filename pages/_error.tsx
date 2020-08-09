import React from 'react';
import { NextPageContext } from 'next';
import Layout from '../src/Layout';
import EmptyState from '../src/EmptyState';

interface Props {
  errorText: string
}

const Error = ({ errorText }: Props): JSX.Element => (
  <Layout>
    <EmptyState text={errorText} />
  </Layout>
);

Error.getInitialProps = ({ res, err }: NextPageContext): Props => {
  const statusCode: number = res?.statusCode || err?.statusCode || 404;
  const errorText = statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client';
  return { errorText };
};

export default Error;
