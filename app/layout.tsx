import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'
import content from '@/public/content.json'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700', '800'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
const ogImage = '/images/og.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.site.siteTitle,
    template: `%s | ${content.site.ownerName}`,
  },
  description: content.hero.heroSubline,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/',
    siteName: content.site.ownerName,
    title: content.site.siteTitle,
    description: content.hero.heroSubline,
    images: [{ url: ogImage, width: 1200, height: 630, alt: content.site.ownerName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.site.siteTitle,
    description: content.hero.heroSubline,
    images: [ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>{children}</body>
    </html>
  )
}
