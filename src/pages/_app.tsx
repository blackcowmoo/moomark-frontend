import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import '@styles/global.scss';

const App = ({ Component, pageProps }: AppProps | any) => {
  return (
    <>
      <Head>
        <title>MooMark</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width user-scalable=yes, initial-scale=1.0, maximun-scale=3.0' />
        <meta charSet='utf-8' />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
