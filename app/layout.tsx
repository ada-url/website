import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Home',
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
      </body>
    </html>
  )
}
