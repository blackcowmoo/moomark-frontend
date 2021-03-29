import Header from './Header';

export interface LayoutProps {}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
      {children}
      </main>
    </>
  );
};

export default AppLayout;
