import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Spiritual Side of Leadership',
    template: '%s | Spiritual Side of Leadership',
  },
  description: 'Lead with purpose. Lead with faith. Resources for spiritual leaders.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://spiritualsideofleadership.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Spiritual Side of Leadership',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
