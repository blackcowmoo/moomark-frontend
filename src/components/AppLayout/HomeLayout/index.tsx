import styles from './HomeLayout.module.scss';

const HomeLayout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default HomeLayout;
