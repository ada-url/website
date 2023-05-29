import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import './mdx.css'
import { ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@/components/mdx-components'
import { DocsPager } from '@/components/pager'
import { imageSize } from '@/components/social-image'
import { DashboardTableOfContents } from '@/components/toc'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { siteConfig } from '@/config/site'
import { getTableOfContents } from '@/lib/toc'
import { absoluteUrl, cn } from '@/lib/utils'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export function generateMetadata({ params }: DocPageProps): Metadata {
  const slug = params.slug?.join('/') || ''
  const doc = getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: doc.slug,
      images: [
        {
          url: `/api/opengraph-image?slug=${slug}`,
          ...imageSize,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/api/opengraph-image?slug=${slug}`,
          ...imageSize,
          alt: siteConfig.name,
        },
      ],
    },
  }
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Docs</div>
          <ChevronRight className='h-4 w-4' />
          <div className='font-medium text-foreground'>{doc.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
          {doc.description && (
            <p className='text-lg text-muted-foreground'>
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <Separator className='my-4 md:my-6' />
        <Mdx code={doc.body.code} />
        <Separator className='my-4 md:my-6' />
        <DocsPager doc={doc} />
      </div>
      <div className='hidden text-sm xl:block'>
        <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6'>
          <ScrollArea className='pb-10'>
            <DashboardTableOfContents toc={toc} />
          </ScrollArea>
        </div>
      </div>
    </main>
  )
}
