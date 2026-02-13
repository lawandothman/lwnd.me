import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://lwnd.me',
			lastModified: new Date(),
		},
		{
			url: 'https://lwnd.me/projects',
			lastModified: new Date(),
		},
		{
			url: 'https://lwnd.me/stack',
			lastModified: new Date(),
		},
	]
}
