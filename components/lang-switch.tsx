'use client'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import i18nConfig, { getLocaleName } from '@/i18n.config.mjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

const LangSwitch: FC = () => {
  // @TODO: use nextjs features to get current route
  const currentRouteLocalized = (locale: string) => {
    const pathname = usePathname()
    const path = pathname.split('/')
    path[1] = locale
    return path.join('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='w-9 px-0'>
          <Icons.lang className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Icons.lang className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Lang switcher</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {i18nConfig.locales.map((locale) => (
          <Link href={currentRouteLocalized(locale)}>
            <DropdownMenuItem key={locale}>{getLocaleName(locale)}</DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { LangSwitch }
