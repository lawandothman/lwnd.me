import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Shell } from 'components'

const Custom404: NextPage = () => {
	return (
		<>
			<Head>
				<title>lwnd</title>
			</Head>
			<Shell>
				<Heading color='heading' mb={10}>
					404 - Page Not Found
				</Heading>
				<Text mb={10} fontWeight='medium' color='text'>
					It seems that you&apos;ve found something that used to be here, or you
					spelled something wrong. I&apos;m guessing you spelled something
					wrong. Can you double check that URL?
				</Text>
				<Flex justifyContent='flex-end'>
					<Link href='/' passHref>
						<Button as='a' px={8} _focus={{ boxShadow: 'none' }}>
							Return Home
						</Button>
					</Link>
				</Flex>
			</Shell>
		</>
	)
}

export default Custom404
