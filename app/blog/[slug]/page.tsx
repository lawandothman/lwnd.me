import { PostBody } from '@/components/post-body'
import { formatDate } from '@/lib/date'
import { getPost, getPosts } from '@/lib/notion'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const data = await getPost(slug)
	if (!data) return {}

	return {
		title: data.post.title,
		description: data.post.description,
		alternates: {
			canonical: `/blog/${slug}`,
		},
	}
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const data = await getPost(slug)
	if (!data) notFound()

	const { post, html } = data

	return (
		<article className='animate-fade-up'>
			<h1 className='font-display text-4xl tracking-tight sm:text-5xl'>{post.title}</h1>
			{post.date && (
				<time className='text-muted-foreground mt-4 block text-sm'>{formatDate(post.date)}</time>
			)}
			<PostBody html={html} className='mt-10' />
		</article>
	)
}
