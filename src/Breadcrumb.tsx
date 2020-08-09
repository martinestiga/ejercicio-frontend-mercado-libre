import React from 'react';
import styles from '../public/styles/breadcrumb.module.scss';

export interface BreadcrumbProps {
  categories: string[];
}

function Breadcrumb({ categories }: BreadcrumbProps): JSX.Element {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumb}>
      <ol>
        {categories.map((category: string) => (
          <li key={category}><a href={`/items?search=${category}`}>{ category }</a></li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
