import { Box, Flex } from '@chakra-ui/react'

import { Footer, NavBar } from 'components'

export const Shell: React.FC = ({ children }) => {
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
