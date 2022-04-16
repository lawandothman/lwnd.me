import { Heading, Text, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

import { Page, Shell, StackItem } from 'components'

import stack from 'data/stack'

const Stack: NextPage = () => {
	return (
		<Page name='Stack' path='/stack'>
			<Shell>
				<Heading color='heading' mb={4}>
					Stack
				</Heading>
				<Text color='text' mb={8} fontWeight='medium'>
					My favourite tools and software.
				</Text>
				<VStack spacing={4}>
					{stack.map((_stack) => (
						<StackItem stack={_stack} key={_stack.name} />
					))}
				</VStack>
			</Shell>
		</Page>
	)
}
export default Stack
