import { SocialImage, imageSize } from '@/components/social-image'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = imageSize

const path = new URL('../../public/fonts/Inter-SemiBold.woff', import.meta.url)
const fontBuffer = fetch(path).then((res) => res.arrayBuffer())

export default async function Image() {
  const font = await fontBuffer
  return SocialImage({ font, title: 'Ada URL Parser playground' })
}
