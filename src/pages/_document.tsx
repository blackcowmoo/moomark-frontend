import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme');
      }
      else if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        window.localStorage.setItem('theme', 'dark'); 
        return 'dark';
      }
      else {
        window.localStorage.setItem('theme', 'light'); 
        return 'light'
      }
    }
    document.body.dataset.theme = getUserPreference();
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
