import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType } from 'next';
import Head from 'next/head';
import AppLayout from '@components/AppLayout/AppLayout';
import { ApolloProvider } from '@apollo/client';
import client from 'api/apolloClient';
import { RecoilRoot } from 'recoil';
import '@styles/global.scss';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Head>
          <title>MooMark</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width user-scalable=yes, initial-scale=1.0, maximun-scale=3.0' />
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </ApolloProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
