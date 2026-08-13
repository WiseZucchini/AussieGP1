import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AussieGP',
  description: 'Your go-to source for Australian Grand Prix coverage, analysis, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
