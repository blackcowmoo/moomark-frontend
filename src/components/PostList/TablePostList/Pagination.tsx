import styles from './TablePostList.module.scss';

interface IPagination {
  totalPostCount: number;
  limit: number;
  currentPage: number;
  setPage: (input: number) => void;
}

const Pagination: React.FC<IPagination> = ({ totalPostCount, limit, currentPage, setPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPostCount / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {currentPage !== 1 && <button onClick={() => setPage(currentPage - 1)}>&lt</button>}
      {pageNumbers.map((pageIndex) => {
        return (
          <button key={pageIndex} onClick={() => setPage(pageIndex)}>
            {pageIndex}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;
