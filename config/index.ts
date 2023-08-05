import env from 'env-var'

export const config = {
	spotify: {
		SPOTIFY_CLIENT_ID: env.get('SPOTIFY_CLIENT_ID').required().asString(),
		SPOTIFY_CLIENT_SECRET: env
			.get('SPOTIFY_CLIENT_SECRET')
			.required()
			.asString(),
		SPOTIFY_REFRESH_TOKEN: env
			.get('SPOTIFY_REFRESH_TOKEN')
			.required()
			.asString(),
	},
	notion: {
		NOTION_SECRET: env.get('NOTION_SECRET').required().asString(),
		NOTION_DATABASE_ID: env.get('NOTION_DATABASE_ID').required().asString(),
	},
}
