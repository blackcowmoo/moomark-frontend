import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useInput from 'utils/hooks/useInput';
import SearchLogo from '@components/svg/Search.svg';
import styles from './SearchForm.module.scss';

interface ISearchForm {
  searchInput?: string;
}

const SearchForm: React.FC<ISearchForm> = ({ searchInput }) => {
  const router = useRouter();
  const [value, , handleInput] = useInput<string>(searchInput || '');

  useEffect(() => {
    router.push({ query: { ...router.query, q: value } }, undefined, { shallow: true });
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.logo}>
          <SearchLogo />
        </div>
        <input type='text' className={styles.searchInput} value={value} onChange={handleInput} placeholder='Search input' />
      </div>
    </div>
  );
};

export default SearchForm;
