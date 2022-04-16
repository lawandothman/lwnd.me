import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'

import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme} resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	)
}

export default MyApp
