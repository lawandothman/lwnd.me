import type { NextApiRequest, NextApiResponse } from 'next'

import { getNowPlaying } from 'lib/spotify'

const nowPlaying = async (_req: NextApiRequest, res: NextApiResponse) => {
	const response = await getNowPlaying()

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({ isPlaying: false })
	}

	const track = await response.json()

	if (track.item === null) {
		return res.status(200).json({ isPlaying: false })
	}

	const isPlaying = track.is_playing
	const title = track.item.name
	const artist = track.item.artists
		.map((_artist: any) => _artist.name)
		.join(', ')
	const songUrl = track.item.external_urls.spotify

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=60, stale-while-revalidate=30'
	)

	return res.status(200).json({
		artist,
		isPlaying,
		songUrl,
		title,
	})
}

export default nowPlaying
