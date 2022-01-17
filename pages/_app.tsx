import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '@/styles/theme'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

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
