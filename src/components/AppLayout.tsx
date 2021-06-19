import { ReactNode } from 'react';
import Header from './Header';

const AppLayout: React.FC<ReactNode> = ({ children }) => {
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
