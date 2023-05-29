import './globals.css'
import { Analytics } from '@/components/analytics'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { absoluteUrl } from '@/lib/utils'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Ada URL Parser',
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['WHATWG', 'URL Parser', 'Fast URL parsing', 'ada-url', 'Ada URL Parser'],
  authors: [
    {
      name: 'Yagiz Nizipli',
      url: 'https://yagiz.co',
    },
    {
      name: 'Daniel Lemire',
      url: 'https://lemire.me',
    },
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: absoluteUrl('/site.webmanifest'),
  category: 'technology',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1'>{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>

        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
