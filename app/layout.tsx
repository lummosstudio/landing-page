import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lumos Digital - AI & Data Solutions',
  description: 'Transform your business with cutting-edge AI and data solutions. Lumos Digital delivers innovative technology services.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/app-icon.png',
        sizes: 'any',
      },
      {
        url: '/app-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/app-icon.png',
  },
  openGraph: {
    title: 'Lumos Digital - AI & Data Solutions',
    description: 'Transform your business with cutting-edge AI and data solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
