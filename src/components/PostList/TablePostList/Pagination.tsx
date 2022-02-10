import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TablePostList.module.scss';

interface IPagination {
  totalPostCount: number;
  pageRange: number;
  currentPage: number;
  setPage: (input: number) => void;
}

const Pagination: React.FC<IPagination> = ({ totalPostCount, pageRange, currentPage, setPage }) => {
  const router = useRouter();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPostCount / pageRange); i += 1) {
    pageNumbers.push(i);
  }

  const handlePaginate = (input: number) => {
    // route.push({ query: { page: input } });
    setPage(input);
  };

  return (
    <nav className={styles.Pagination}>
      {pageNumbers.map((number) => {
        return (
          <button className={currentPage === number ? styles.activePage : styles.page} key={number} onClick={() => handlePaginate(number)}>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, page: number },
              }}
              shallow
              replace
            >
              <a>{number}</a>
            </Link>
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;
