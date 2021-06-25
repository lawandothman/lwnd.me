import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  ...config,
  fonts: {
    body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  styles: {
    global: (props) => ({
      html: {
        minWidth: '360px',
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: props.colorMode === 'dark' ? 'black' : 'white',
        transition: 'background-color 0s',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    }),
  },
})

export default theme
