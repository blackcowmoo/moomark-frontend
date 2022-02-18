import useInput from 'utils/hooks/useInput';
import styles from './SearchForm.module.scss';

interface ISearchForm {
  searchInput?: string;
}

const SearchForm: React.FC<ISearchForm> = ({ searchInput }) => {
  const [value, _, handleInput] = useInput<string>(searchInput || '');

  return (
    <div className={styles.container}>
      <form action='#' className={styles.search}>
        <input type='text' className={styles.search__input} value={value} onChange={handleInput} placeholder='Search input' />
      </form>
    </div>
  );
};

export default SearchForm;
