import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { ApolloProvider } from '@apollo/client';
import client from 'lib/apolloClient';
import '@styles/global.scss';
import { AuthContextProvider } from 'context/authContext';
import { useModal } from 'hooks/useModal';
import Modal from '@components/common/Modal';

const App = ({ Component, pageProps }: AppProps | any) => {
  const { isShown, toggle } = useModal();
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>MooMark</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width user-scalable=yes, initial-scale=1.0, maximun-scale=3.0' />
        <meta charSet='utf-8' />
      </Head>
      <AuthContextProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        <Modal title='ddd' isShown={isShown} onClose={toggle} content={<div>modla</div>} />
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default App;
