import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function setUserLocalTheme() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme');
      }
      return null;
    }
    document.body.dataset.theme = setUserLocalTheme() : 'light';
  `;
    return (
      <Html>
        <Head>
          <link rel='icon' href='favicon.svg' />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
          <div id='modal-root'></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
