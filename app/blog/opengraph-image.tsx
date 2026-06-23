import { ogContentType, ogSize, renderOgCard } from '@/lib/og'

export const alt = 'Writing - Lawand Othman'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
	return renderOgCard({
		title: 'Writing',
		subtitle: 'Thoughts, notes, and the occasional deep dive.',
	})
}
