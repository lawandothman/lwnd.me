import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/nav'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://lwnd.me/'),
  title: {
    default: 'Lawand Othman',
    template: '%s | Lawand Othman',
  },
  description: 'Full-stack software engineer, hacker and creator',
  openGraph: {
    title: 'Lawand Othman',
    description: 'Full-stack software engineer, hacker and creator',
    url: 'https://lwnd.me/',
    siteName: 'Lawand Othman',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Lawand Othman',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
