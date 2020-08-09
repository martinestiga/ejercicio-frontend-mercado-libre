import React, { PropsWithChildren } from 'react';
import styles from '../public/styles/page-content.module.scss';

export interface PageContentProps {
  className?: string;
}

export default function PageContent({ children, className }: PropsWithChildren<PageContentProps>) {
  return (
    <main className={`${styles.container} ${className}`}>
      {children}
    </main>
  );
}
