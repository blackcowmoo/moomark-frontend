import useInput from 'utils/hooks/useInput';
import SearchLogo from '@components/svg/Search.svg';
import styles from './SearchForm.module.scss';

interface ISearchForm {
  searchInput?: string;
}

const SearchForm: React.FC<ISearchForm> = ({ searchInput }) => {
  const [value, , handleInput] = useInput<string>(searchInput || '');

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
