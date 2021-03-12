import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';

const MooMarkAdmin = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MooMarkAdmin</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <title>MooMarkAdmin</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MooMarkAdmin;
