import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import i18Next from '../i18n';
import styles from '../public/styles/search-box.module.scss';

export interface SearchBoxProps {
  searchQuery?: string;
  changeSearchQuery?: (searchQuery: string) => void;
}

function SearchBox({ searchQuery, changeSearchQuery }: SearchBoxProps): JSX.Element {
  const { t } = i18Next.useTranslation('common');
  const [value, setValue] = useState(searchQuery || '');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    if (value === '') {
      event.preventDefault();
      return;
    }

    if (changeSearchQuery) {
      event.preventDefault();
      changeSearchQuery(value);
    }
  }

  function handleInputOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (searchQuery && searchQuery !== value) {
      setValue(searchQuery);
    }
  }, [searchQuery]);

  return (
    <form className={styles['search-box-form']} onSubmit={handleSubmit} action="/items" method="GET" role="search">
      <input
        type="text"
        className={styles['search-box-input']}
        name="search"
        value={value}
        onChange={handleInputOnChange}
        placeholder={t('search-box-input-placeholder')}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        aria-label={t('search')}
      />
      <button type="submit" aria-label={t('search')} className={styles['search-box-button']}>
        <img alt="Icono Buscar" width="18" height="18" src="/assets/ic_Search@2x.png" />
      </button>
    </form>
  );
}

export default SearchBox;
