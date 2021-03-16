import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from '../lib/withApollo';
import ApolloClient from 'apollo-client';


const App = ({ Component, pageProps}: AppProps ) => {
  return (
    <>
      <Head>
        <title>MooMark</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

App.getInitialProps = async({ ctx, Component}: AppProps) => {
  const pageProps = await Component.getInitialProps?.(ctx);

  return { pageProps };
}

export default withApolloClient(App);
