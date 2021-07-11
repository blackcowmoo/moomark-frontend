import styles from './main.module.scss';

const MainLayout: React.FC<React.ReactNode> = ({children}) => {
  return (
    <div className={styles.main_container}>
      {children}
    </div>
  );
      
}

export default MainLayout;
