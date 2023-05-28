import { Icons } from '@/components/icons'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    absolute: 'Ada URL Parser - Fast WHATWG Compliant URL parser',
  },
}

export default function IndexPage() {
  return (
    <div className='container relative pb-10 flex flex-col sm:flex-row items-start'>
      <Icons.logo className='h-36 pt-8 md:pt-12' />
      <PageHeader>
        <PageHeaderHeading>Ada URL Parser</PageHeaderHeading>
        <PageHeaderDescription>Parsing millions of URLs per second</PageHeaderDescription>
        <div className='flex items-center pb-8 pt-4 md:pb-10 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full'>
          <Link href='/docs/introduction' className={cn(buttonVariants(), 'w-full sm:w-auto')}>
            Get Started
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}
          >
            <Icons.gitHub className='mr-2 h-4 w-4' />
            GitHub
          </Link>
          <Link
            href='/playground'
            className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}
          >
            <Icons.link className='mr-2 h-4 w-4' />
            Try now
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
