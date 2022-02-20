import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useInput from 'utils/hooks/useInput';
import styles from './SearchForm.module.scss';

interface ISearchForm {
  searchInput?: string;
}

const SearchForm: React.FC<ISearchForm> = ({ searchInput }) => {
  const router = useRouter();
  const [value, _, handleInput] = useInput<string>(searchInput || '');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    router.push(`${router.pathname}/?q=${value}`, undefined, { shallow: true })

  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.search}>
        <input type='text' className={styles.search__input} value={value} onChange={handleInput} placeholder='Search input' />
      </form>
    </div>
  );
};

export default SearchForm;
