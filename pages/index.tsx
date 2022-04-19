import { Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

import { Shell } from 'components'

const Home: NextPage = () => {
	return (
		<Shell>
			<Heading color='heading' mb={4}>
				Hey, I&apos;m Lawand Othman
			</Heading>
			<Text as='p' color='text' mb={2} fontWeight='medium'>
				I&apos;m a developer based in London, UK. You&apos;ve found my personal
				slice of the internet where I share all the beautiful and fun stuff
				I&apos;m working on.
			</Text>
		</Shell>
	)
}
export default Home
