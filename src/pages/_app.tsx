import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import withApolloClient from '../lib/withApollo';
import '@styles/global.scss';

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

App.getInitialProps = async ({ ctx, Component }: any) => {
  const pageProps = await Component.getInitialProps?.(ctx);

  return { pageProps };
};

export default withApolloClient(App);
