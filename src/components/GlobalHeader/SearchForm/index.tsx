import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <div className={styles.container}>
      <form action='#' className={styles.search}>
        <input type='text' className={styles.search__input} placeholder='Search input' />
      </form>
    </div>
  );
};

export default SearchForm;
