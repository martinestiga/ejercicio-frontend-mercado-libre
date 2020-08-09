import React, { PropsWithChildren } from 'react';
import Header from './Header';
import LayoutContent from './LayoutContent';

export interface LayoutProps {
  searchQuery?: string;
  changeSearchQuery?: (searchQuery: string) => void;
}

export default function Layout({ children, searchQuery, changeSearchQuery }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header searchQuery={searchQuery} changeSearchQuery={changeSearchQuery} />
      <LayoutContent>
        {children}
      </LayoutContent>
    </>
  );
}
