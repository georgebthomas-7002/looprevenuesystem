import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Loop Revenue System',
    template: '%s | Loop Revenue System',
  },
  description: 'One system. Four loops. Continuous learning. The Loop Revenue System helps organizations align Marketing, Sales, Service, and Ops into one continuous learning engine.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://looprevenuesystem.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Loop Revenue System',
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
      <body className="min-h-screen bg-bg antialiased">
        {children}
      </body>
    </html>
  )
}
