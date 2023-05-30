import { SocialImage, imageSize } from '@/components/social-image'
import { absoluteUrl } from '@/lib/utils'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = imageSize

const path = absoluteUrl('/fonts/Inter-SemiBold.woff')
const fontBuffer = fetch(path).then((res) => res.arrayBuffer())

export default async function Image() {
  const font = await fontBuffer
  return SocialImage({ font, title: 'Ada URL Parser' })
}
