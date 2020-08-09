import React from 'react';
import styles from '../public/styles/empty-state.module.scss';
import i18Next from '../i18n';

export interface EmptyStateProps {
  text: string;
}

function EmptyState({ text }: EmptyStateProps): JSX.Element {
  const { t } = i18Next.useTranslation('common');

  return (
    <div className={styles.container}>
      <h1>{text}</h1>
      <a href="/">{t('go-home')}</a>
    </div>
  );
}

export default EmptyState;
