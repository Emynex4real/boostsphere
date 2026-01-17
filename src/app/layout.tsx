import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BoostSphere - Built for Real Growth',
  description: 'BoostSphere helps creators, brands, and businesses dominate social algorithms across Facebook, Instagram, and TikTok using data-driven strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}