import React from 'react';
import LayoutContent from './LayoutContent';
import SearchBox from './SearchBox';
import styles from '../public/styles/header.module.scss';

export interface HeaderProps {
  searchQuery?: string;
  changeSearchQuery?: (searchQuery: string) => void;
}

function Header({ searchQuery, changeSearchQuery }: HeaderProps): JSX.Element {
  return (
    <header role="banner" className={styles['nav-header']}>
      <LayoutContent>
        <div className={styles['header-container']}>
          <a href="/">
            <img className={styles['header-logo']} width="53" height="36" alt="Logo Mercado Libre" src="/assets/Logo_ML@2x.png" />
          </a>
          <SearchBox searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
        </div>
      </LayoutContent>
    </header>
  );
}

export default Header;
