import { cn } from '@/lib/utils'

export function PostBody({ html, className }: { html: string; className?: string }) {
	return (
		<div
			className={cn('prose prose-neutral dark:prose-invert max-w-none', className)}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}
