import { ReactNode } from 'react';
import GlobalHeader from '../GlobalHeader';

const AppLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      {children}
    </>
  );
};

export default AppLayout;
