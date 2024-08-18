import type { Metadata } from 'next'
import { Suspense } from 'react'
import PlaygroundForm from './form'

const title = 'URL Parser Playground'
const description =
  'A playground to test and run Ada URL parser: a WHATWG Compliant and fast URL parser'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/playground',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function Playground() {
  return (
    <Suspense>
      <PlaygroundForm />
    </Suspense>
  )
}
