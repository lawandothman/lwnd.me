import { Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

import { Shell } from 'components'
import contact from 'data/contact'

const Home: NextPage = () => {
	return (
		<Shell>
			<Heading color='heading' mb={8}>
				Hey, I&apos;m Lawand
			</Heading>
			<Text as='p' color='text' mb={2} fontWeight='medium'>
				Full-Stack Software Engineer based in London, UK
			</Text>
			<Text color='text' mt={8} fontWeight='medium'>
				Have a question or want to work together?
			</Text>
			<Flex mt={12} direction='row' justifyContent='space-between'>
				{contact.map((contactItem) => (
					<IconButton
						key={contactItem.name}
						aria-label={contactItem.name}
						icon={contactItem.icon}
						variant='outline'
						as='a'
						href={contactItem.link}
						target={contactItem.isExternal ? '_blank' : '_self'}
						borderWidth={['0px', '1px']}
						p={4}
						_focus={{ boxShadow: 'none' }}
					/>
				))}
			</Flex>
		</Shell>
	)
}
export default Home
