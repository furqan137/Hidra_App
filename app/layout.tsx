import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0fb9b1',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Hidra - Private Vault & Hidden Gallery',
  description:
    'Your Private Life. Hidden. Protected. Secure. Protect your photos, videos, albums, and personal files with military-inspired privacy tools.',
  keywords: [
    'privacy',
    'vault',
    'secure',
    'gallery',
    'hidden app',
    'privacy vault',
  ],
  authors: [{ name: 'Hidra' }],
  creator: 'Hidra',

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hidra.app',
    siteName: 'Hidra',
    title: 'Hidra - Private Vault & Hidden Gallery',
    description: 'Your Private Life. Hidden. Protected. Secure.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Hidra Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hidra - Private Vault & Hidden Gallery',
    description: 'Your Private Life. Hidden. Protected. Secure.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}