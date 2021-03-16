import Link from 'next/link';
import styles from './appLayout.module.scss';
export interface LayoutProps {}

const AppLayout: React.FC<LayoutProps> = () => {
  return (
    <>
      <header className={styles.appHeader}>
        <Link href="/">
          <a className="app header logo">logo</a>
        </Link>

        <div className="progress container"></div>
        <div className={styles.actionMenuList}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <ul className="app-header-nav">
            <li>
              <Link href="/editpost">new post</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default AppLayout;
