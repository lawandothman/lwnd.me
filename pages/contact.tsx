import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

import { Page, Shell } from 'components'

import contact from 'data/contact'

const Contact: NextPage = () => {
	return (
		<Page name='Contact' path='/contact'>
			<Shell>
				<Box>
					<Heading color='heading' mb={4}>
						Contact me
					</Heading>
					<Text color='text' mb={2} fontWeight='medium'>
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
				</Box>
			</Shell>
		</Page>
	)
}
export default Contact
