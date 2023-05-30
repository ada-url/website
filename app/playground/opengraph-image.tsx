import { SocialImage, fontBuffer, imageSize } from '@/components/social-image'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = imageSize

export default async function Image() {
  const font = await fontBuffer
  return SocialImage({ font, title: 'Ada URL Parser playground' })
}
