'use client'

import { SidebarNavItem } from '@/types/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  if (items.length === 0) {
    return null
  }

  return (
    <div className='w-full'>
      {items.map((item) => (
        <div key={`${item.href}-${item.title}-${item.items.length}`} className={cn('pb-4')}>
          <h4 className='mb-1 rounded-md px-2 py-1 text-sm font-semibold'>{item.title}</h4>
          {item?.items?.length && <DocsSidebarNavItems items={item.items} pathname={pathname} />}
        </div>
      ))}
    </div>
  )
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({ items, pathname }: DocsSidebarNavItemsProps) {
  if (!items?.length) {
    return null
  }
  return (
    <div className='grid grid-flow-row auto-rows-max text-sm'>
      {items.map((item) =>
        item.href && !item.disabled ? (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground',
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
            {item.label && (
              <span className='ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline'>
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={item.href}
            className={cn(
              'flex w-full cursor-not-allowed items-center roueed-md p-2 text-muted-foreground hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60',
            )}
          >
            {item.title}
            {item.label && (
              <span className='ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline'>
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  )
}
