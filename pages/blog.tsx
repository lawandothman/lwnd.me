import { Heading, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'
import { BlogResponse } from 'types'

import { Page, Shell } from 'components'

import fetcher from 'lib/fetcher'

const Blog: NextPage = () => {
	const { data } = useSWR<BlogResponse>('/api/blog', fetcher)

	return (
		<Page name='Blog' path='/blog'>
			<Shell>
				<Heading color='heading' mb={8}>
					Blog
				</Heading>

				<VStack spacing={4} align='stretch'>
					<UnorderedList>
						{data?.blogs.map((blog) => (
							<ListItem key={blog.id}>{blog.title}</ListItem>
						))}
					</UnorderedList>
				</VStack>
			</Shell>
		</Page>
	)
}

export default Blog
