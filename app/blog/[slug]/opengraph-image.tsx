import { getPostMeta } from '@/lib/notion'
import { ogContentType, ogSize, renderOgCard } from '@/lib/og'

export const alt = 'Writing - Lawand Othman'
export const size = ogSize
export const contentType = ogContentType

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const post = await getPostMeta(slug)

	return renderOgCard({
		title: post?.title ?? 'Writing',
		subtitle: post?.description,
	})
}
