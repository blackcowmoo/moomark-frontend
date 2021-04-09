import Header from './Header';
import {ReactNode} from 'react';

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
