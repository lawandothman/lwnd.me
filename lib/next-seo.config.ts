import { NextSeoProps } from 'next-seo'

const SEO: NextSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lwnd.me',
    site_name: 'lwnd.me',
    title: 'lwnd.me',
    description: 'Lawand Othman\'s Personal Site',
    images: [
      {
        url: 'https://lwnd.me/logo.png',
        width: 1200,
        height: 627,
        alt: 'lwnd.me Og Image Alt',
      },
    ],
  },
  twitter: {
    handle: '@lwndothman',
  },

}

export default SEO
