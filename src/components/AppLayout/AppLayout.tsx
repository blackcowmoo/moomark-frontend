import { ReactNode } from 'react';
import GlobalHeader from '../GlobalHeader';

import styles from './AppLayout.module.scss';

const AppLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <div className={styles.AppLayout}>{children}</div>
      <footer className={styles.footer}>
        @black-cow-moo Moomark
      </footer>
    </>
  );
};

export default AppLayout;
