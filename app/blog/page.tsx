import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/notion'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
	title: 'Writing',
	description: 'Thoughts and writing by Lawand Othman.',
	alternates: {
		canonical: '/blog',
	},
}

export default async function Blog() {
	const posts = await getPosts()

	return (
		<>
			<div className='animate-fade-up'>
				<h1 className='font-display text-5xl tracking-tight sm:text-6xl'>Writing</h1>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '100ms' }}>
				<p className='text-muted-foreground mt-4 text-lg'>
					Thoughts, notes, and the occasional deep dive.
				</p>
			</div>
			<div className='animate-fade-up' style={{ animationDelay: '200ms' }}>
				<div className='mt-14'>
					{posts.length === 0 ? (
						<p className='text-muted-foreground text-sm'>Nothing here yet. Check back soon.</p>
					) : (
						posts.map((post) => <PostCard post={post} key={post.id} />)
					)}
				</div>
			</div>
		</>
	)
}
