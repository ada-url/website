import { SocialImage } from '@/components/social-image'
import { absoluteUrl } from '@/lib/utils'
import { allDocs } from 'contentlayer/generated'

export const runtime = 'edge'

const path = absoluteUrl('/fonts/Inter-SemiBold.woff')
const fontBuffer = fetch(path).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  const title = doc?.title ?? 'Ada URL Parser'
  const font = await fontBuffer
  return SocialImage({ font, title })
}
