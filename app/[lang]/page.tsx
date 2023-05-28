import Link from 'next/link'

import { Icons } from '@/components/icons'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Ada URL Parser - Fast WHATWG Compliant URL parser',
  },
}

export default function IndexPage() {
  return (
    <div className='container relative pb-10'>
      <PageHeader>
        <PageHeaderHeading>Ada URL Parser</PageHeaderHeading>
        <PageHeaderDescription>Parsing millions of URLs per second</PageHeaderDescription>
        <div className='flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10'>
          {/*@TODO: use local*/}
          <Link href='en/docs/introduction' className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className='mr-2 h-4 w-4' />
            GitHub
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
