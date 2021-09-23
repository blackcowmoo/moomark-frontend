import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { ApolloProvider } from '@apollo/client';
import client from 'api/apolloClient';
import { RecoilRoot } from 'recoil';
import '@styles/global.scss';
import { AuthContextProvider } from 'context/authContext';

const App = ({ Component, pageProps }: AppProps | any) => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Head>
          <title>MooMark</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width user-scalable=yes, initial-scale=1.0, maximun-scale=3.0' />
        </Head>
        <AuthContextProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </AuthContextProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
