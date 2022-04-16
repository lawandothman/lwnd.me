import { NextSeo } from 'next-seo'
import React from 'react'

interface PageProps {
	name: string
	path: string
}
export const Page: React.FC<PageProps> = ({ name, path, children }) => {
	const title = `lwnd – ${name}`
	const url = `https://lwnd.me${path}`

	return (
		<>
			<NextSeo
				title={title}
				canonical={url}
				openGraph={{
					url,
					title,
				}}
			/>
			{children}
		</>
	)
}
