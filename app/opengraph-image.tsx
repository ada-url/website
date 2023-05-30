import { SocialImage, imageSize } from '@/components/social-image'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = imageSize

export default async function Image() {
  return SocialImage({ title: 'Ada URL Parser' })
}
