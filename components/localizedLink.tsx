'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { FC, ReactNode } from 'react'
import type { UrlObject } from 'url'

type Props = {
  href: string | URL | URLSearchParams | UrlObject
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

const LocalizedLink: FC<Props> = ({ href, children, className, target, rel }) => {
  const params = useParams()
  const path = `/${params.lang}${href}`

  return (
    <Link
      href={path}
      className={className}
      target={target}
      rel={rel} 
    >
      {children}
    </Link>
  )
}

export default LocalizedLink
