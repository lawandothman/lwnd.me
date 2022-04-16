import { Box, Divider, Text } from '@chakra-ui/react'

import { NowPlaying } from 'components'

export const Footer = () => {
	return (
		<Box as='footer' px={[6, 8]} maxWidth={590} mx='auto' mt={20}>
			<Divider w='full' color='black' orientation='horizontal' />
			<Box my={4}>
				<NowPlaying />
				<Text fontSize='xs' color='text'>
					Built with Next.js and Vercel
				</Text>
			</Box>
		</Box>
	)
}
