import { SocialImage } from '@/components/social-image'
import { allDocs } from 'contentlayer/generated'

export const runtime = 'edge'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  return SocialImage({ title: doc?.title ?? 'Ada URL Parser' })
}
