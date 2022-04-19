import { Box, Flex } from '@chakra-ui/react'

import { Footer, NavBar } from 'components'

interface ShellProps {
	children?: React.ReactNode
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
	return (
		<Box>
			<NavBar />

			<Flex
				as='main'
				mx='auto'
				maxWidth={590}
				direction='column'
				px={[6, 8]}
				overflow='auto'
				mb={6}
			>
				{children}
			</Flex>

			<Footer />
		</Box>
	)
}
