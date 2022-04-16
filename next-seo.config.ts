import { NextSeoProps } from 'next-seo'

const title = 'lwnd'
const description = "Lawand Othman's Personal Website"

const SEO: NextSeoProps = {
	title,
	description,
	canonical: 'https://lwnd.me',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://lwnd.me',
		title,
		description,
		images: [
			{
				url: 'https://lwnd.me/logo.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@lwndothman',
	},
}

export default SEO
