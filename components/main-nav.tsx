'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { cn } from '@/lib/utils'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <span className='hidden font-bold sm:inline-block'>Ada URL</span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/docs'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Documentation
        </Link>
        <Link
          href='/docs/performance'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/performance') ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Performance
        </Link>
        <Link
          href='https://playground.ada-url.com'
          className={cn('transition-colors hover:text-foreground/80 text-foreground/60')}
        >
          Playground
        </Link>
        <Link
          href='https://github.com/ada-url/ada'
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
