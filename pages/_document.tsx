import { ColorModeScript } from '@chakra-ui/react'
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'

import theme from 'styles/theme'

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
