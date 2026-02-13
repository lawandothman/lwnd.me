import { getNowPlaying } from '@/lib/spotify'
import { NextResponse } from 'next/server'

export async function GET() {
	const response = await getNowPlaying()

	if (response.status === 204 || response.status > 400) {
		return NextResponse.json({ isPlaying: false })
	}

	const track = await response.json()

	if (track.item === null) {
		return NextResponse.json({ isPlaying: false })
	}

	const isPlaying = track.is_playing
	const title = track.item.name
	const artist = track.item.artists.map((_artist: { name: string }) => _artist.name).join(', ')
	const songUrl = track.item.external_urls.spotify

	return NextResponse.json(
		{ artist, isPlaying, songUrl, title },
		{
			headers: {
				'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
			},
		}
	)
}
