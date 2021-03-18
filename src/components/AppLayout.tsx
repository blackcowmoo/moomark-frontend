import Header from '@components/Header';

export interface LayoutProps {}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main></main>
      {children}
      <footer></footer>
    </>
  );
};

export default AppLayout;
