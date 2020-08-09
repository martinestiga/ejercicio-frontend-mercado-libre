import React from 'react';
import i18Next from '../i18n';
import Layout from '../src/Layout';

const Home = (): JSX.Element => <Layout />;

export default i18Next.withTranslation('common')(Home);
