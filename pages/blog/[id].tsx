import { Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { Page, Shell } from 'components'

import fetcher from 'lib/fetcher'

const BlogPage = () => {
	const router = useRouter()
	const blogId = router.query.id
	const { data } = useSWR(`/api/blog/${blogId}`, fetcher)
	console.log({ data })

	return (
		<Page name='Blot Title' path={`/blog/${blogId}`}>
			<Shell>
				<Heading color='heading' mb={8}>
					Blog Title
				</Heading>
			</Shell>
		</Page>
	)
}

export default BlogPage
