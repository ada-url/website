'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { FC, ReactNode } from 'react'

type Props = {
  href: string | URL
  children: ReactNode
  className?: string
}

const LocalizedLink: FC<Props> = ({ href, children, className }) => {
  const params = useParams()
  const path = `/${params.lang}${href}`

  return (
    <Link href={path} className={className}>
      {children}
    </Link>
  )
}

export default LocalizedLink
