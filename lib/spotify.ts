const clientId = process.env.SPOTIFY_CLIENT_ID as string
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN as string
const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

const ACCESS_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

const getAccessToken = async () => {
	const response = await fetch(ACCESS_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
		}),
	})
	return response.json()
}

export const getNowPlaying = async () => {
	const response = await getAccessToken()

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${response.access_token}`,
		},
	})
}
