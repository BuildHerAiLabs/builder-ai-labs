import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'BuildHer AI Labs | Empowering Women to Build AI Products',
  description: 'A community where women learn, experiment, and build AI-powered products together. From idea to prototype. From curiosity to creation.',
  keywords: ['AI', 'women in tech', 'community', 'product building', 'workshops', 'hackathons'],
  openGraph: {
    title: 'BuildHer AI Labs',
    description: 'Empowering women to build AI products and shape the future.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#6C63FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
