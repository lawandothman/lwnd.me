import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme} resetCSS>
				<Component {...pageProps} />
				<Analytics />
			</ChakraProvider>
		</>
	)
}

export default MyApp
