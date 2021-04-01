import { ApolloProvider } from '@apollo/client';
import '@styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import withApolloClient from '../lib/withApollo';

const App = ({ Component, pageProps, apollo }: AppProps | any) => {
  return (
    <>
      <Head>
        <title>MooMark</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width user-scalable=yes, initial-scale=1.0, maximun-scale=3.0" />
        <meta charSet="utf-8" />
      </Head>
      <ApolloProvider client={apollo}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ApolloProvider>
    </>
  );
};

export default withApolloClient(App);
