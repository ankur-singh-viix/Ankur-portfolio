import type { Metadata } from 'next'
import './globals.css'

// ✏️ EDIT: Your personal meta info for SEO & browser tab
export const metadata: Metadata = {
  title: 'Ankur Singh— AI & Full-Stack Developer',
  description:
    'A spiritual journey through code. IIT Guwahati student specializing in AI, Full-Stack Development & Data Science.',
  keywords: ['AI Developer', 'Full Stack', 'AI', 'Full-Stack Development'],
  authors: [{ name: 'Ankur Singh' }],
  openGraph: {
    title: 'Ankur Singh — Portfolio',
    description: 'Where logic meets intuition. AI & Full-Stack Developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sacred Geometry favicon placeholder */}
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
