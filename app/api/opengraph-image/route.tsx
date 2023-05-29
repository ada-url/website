import { SocialImage } from '@/components/social-image'
import { allDocs } from 'contentlayer/generated'

export const runtime = 'edge'

const path = new URL('../../../public/fonts/Inter-SemiBold.woff', import.meta.url)
const fontBuffer = fetch(path).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  const title = doc?.title ?? 'Ada URL Parser'
  const font = await fontBuffer
  return SocialImage({ font, title })
}
