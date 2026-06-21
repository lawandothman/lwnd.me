import { formatDate } from '@/lib/date'
import type { Post } from '@/types'
import Link from 'next/link'

export function PostCard({ post }: { post: Post }) {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className='group border-border/50 block border-b py-5 last:border-b-0'
		>
			<div className='flex items-baseline justify-between gap-4'>
				<h2 className='font-display text-lg tracking-tight'>{post.title}</h2>
				{post.date && (
					<time className='text-muted-foreground shrink-0 text-sm'>{formatDate(post.date)}</time>
				)}
			</div>
			{post.description && (
				<p className='text-muted-foreground group-hover:text-foreground mt-1 text-sm transition-colors'>
					{post.description}
				</p>
			)}
		</Link>
	)
}
