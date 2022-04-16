import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

export const ColorModeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			onClick={toggleColorMode}
			_focus={{ boxShadow: 'none' }}
			aria-label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
			icon={
				colorMode === 'light' ? (
					<MoonIcon color='icon' />
				) : (
					<SunIcon color='icon' />
				)
			}
			variant='ghost'
			mr={4}
		/>
	)
}
