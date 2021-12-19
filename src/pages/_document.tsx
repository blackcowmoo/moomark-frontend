import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='cow.svg' />
          {/* <script src='https://apis.google.com/js/platform.js?onload=init' async defer />
          <meta name='google-signin-client_id' content={process.env.DEV_GOOGLE_OAUTH_CLIENT_ID } /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='modal-root'></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
