import { ReactNode } from 'react';
import GlobalHeader from '../GlobalHeader';

import styles from './AppLayout.module.scss';

const AppLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <div className={styles.AppLayout}>{children}</div>
    </>
  );
};

export default AppLayout;