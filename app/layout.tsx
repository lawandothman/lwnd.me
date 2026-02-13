import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { Inter, Lora } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

const lora = Lora({
	subsets: ['latin'],
	variable: '--font-display',
	weight: ['400', '500'],
	display: 'optional',
})

export const metadata: Metadata = {
	title: {
		default: 'Lawand Othman - Software Engineer',
		template: '%s | lwnd',
	},
	description: 'Lawand Othman is a Software Engineer based in London.',
	metadataBase: new URL('https://lwnd.me'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_GB',
		siteName: 'lwnd',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@lwndothman',
	},
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(inter.variable, lora.variable, 'flex min-h-screen flex-col font-sans')}
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Navbar />
					<main className='mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 pt-20 pb-28 sm:px-8'>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
