import { Flex } from '@chakra-ui/react'

import { ColorModeButton, NextChakraLink } from 'components'

const navbarItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Stack',
		href: '/stack',
	},
]

export const Navbar = () => {
	return (
		<Flex as='nav' w='full'>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				p={[6, 8]}
				mx='auto'
				mb={8}
				maxW='1250px'
				w='full'
			>
				<ColorModeButton />
				<Flex
					alignItems='center'
					justifyContent='space-between'
					w='130px'
					color='heading'
				>
					{navbarItems.map((item) => (
						<NextChakraLink
							_hover={{ textDecoration: 'none' }}
							_focus={{ boxShadow: 'none' }}
							href={item.href}
							key={item.title}
						>
							{item.title}
						</NextChakraLink>
					))}
				</Flex>
			</Flex>
		</Flex>
	)
}
