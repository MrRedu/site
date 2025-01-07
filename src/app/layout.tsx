import './globals.css'

import type { Metadata } from 'next'
import { Asul } from 'next/font/google'

const asulFont = Asul({
  variable: '--font-asul',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Site',
    default: 'Site | e-Shop',
  },
  authors: [
    { name: '(Mr Redu) - Eduardo R.', url: 'https://github.com/MrRedu' },
  ],
  creator: 'Mr Redu',
  description: '',
  keywords: ['Site', '', '', '', '', ''],
  openGraph: {
    title: 'Site | e-Shop',
    description: ``,
    url: '',
    siteName: 'Site',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: ``,
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: ``,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${asulFont.variable} antialiased`}>{children}</body>
    </html>
  )
}
