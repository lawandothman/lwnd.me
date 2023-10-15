import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'lwnd.me',
		template: '%s | lwnd.me',
	},
	authors: [
		{
			name: 'Lawand Othman',
		},
	],
	description: "Lawand Othman's Personal Website",
	openGraph: {
		type: 'website',
		title: 'lwnd.me',
		description: "Lawand Othman's Personal Website",
		locale: 'en_GB',
		url: 'https://lwnd.me',
		images: [
			{
				url: 'https://lwnd.me/logo.png',
				alt: 'lwnd.me',
				width: 1280,
				height: '720',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'lwnd.me',
		description: "Lawand Othman's Personal Website",
		creator: '@lwndothman',
		images: ['https://lwnd.me/logo.png'],
	},
}

type RootLayoutProps = {
	children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					inter.className,
					'antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-8 mt-8 lg:mx-auto'
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
