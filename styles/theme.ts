import { StyleFunctionProps, ThemeConfig, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
}

const theme = extendTheme({
	config,
	fonts: {
		body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
	},
	semanticTokens: {
		colors: {
			heading: {
				default: 'blackAlpha.900',
				_dark: 'whiteAlpha.900',
			},
			text: {
				default: 'blackAlpha.900',
				_dark: 'whiteAlpha.700',
			},
			icon: {
				default: 'blackAlpha.900',
				_dark: 'whiteAlpha.900',
			},
		},
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				minWidth: '360px',
				scrollBehavior: 'smooth',
			},
			body: {
				backgroundColor: mode('white', 'black')(props),
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
