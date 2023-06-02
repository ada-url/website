import { BenchmarkChart } from '@/components/charts/benchmarks'
import { Icons } from '@/components/icons'
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
    <main className='container relative flex flex-col mb-24'>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <Icons.logo className='h-36' />
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Meet Ada: WHATWG Compliant URL Parser
          </h1>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Parse millions of URLs per second
          </p>
          <div className='space-x-4 flex flex-row'>
            <Link href='/docs/introduction' className={cn(buttonVariants({ size: 'lg' }))}>
              <Icons.link className='mr-2 h-4 w-4 hidden sm:visible' />
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <Icons.gitHub className='mr-2 h-4 w-4 hidden sm:visible' />
              GitHub
            </Link>
          </div>
          <Link
            href='/playground'
            className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
          >
            Try it on the playground
          </Link>
        </div>
      </section>

      <section className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'>
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-semibold'>
            Ada is fast
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            On a benchmark where we need to validate and normalize{' '}
            <Link
              href='https://github.com/ada-url/url-various-datasets/tree/main/top100'
              className='text-black font-bold underline'
            >
              thousands of URLs found on popular websites
            </Link>{' '}
            we find that ada can be several times faster than popular competitors.
          </p>
        </div>
        <div className='h-72'>
          <BenchmarkChart
            data={[
              { name: 'Ada', value: 188 },
              { name: 'Servo URL', value: 664 },
              { name: 'cURL', value: 1471 },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
