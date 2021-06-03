import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/styles/theme'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='robots' content='index, follow' />
          <meta name='description' content="Lawand Othman's Personal Site" />
          <meta property='og:title' content='lwnd.me' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://lwnd.me' />
          <meta property='og:image' content='https://lwnd.me/logo.png' />
          <meta
            property='og:description'
            content="Lawand Othman's Personal Site"
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='lwnd.me' />
          <meta name='twitter:site' content='@lwndothman' />
          <meta name='twitter:description' content="Lawand Othman's personal site" />
          <meta name='twitter:image' content='https://lwnd.me/logo.png' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
