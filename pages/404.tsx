import React from 'react';
import { TFunction } from 'next-i18next';
import Layout from '../src/Layout';
import EmptyState from '../src/EmptyState';
import i18n from '../i18n';

interface Props {
  t: TFunction;
}

const Custom404 = ({ t }: Props): JSX.Element => (
  <Layout>
    <EmptyState text={t('404')} />
  </Layout>
);

export default i18n.withTranslation('common')(Custom404);
