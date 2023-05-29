import { Icons } from '@/components/icons'
import { ImageResponse } from 'next/server'

export const imageSize = {
  width: 1200,
  height: 630,
}

type Props = {
  font: ArrayBuffer | Buffer
  title: string
}
export async function SocialImage({ font, title }: Props) {
  return new ImageResponse(
    <div tw='bg-black h-full w-full flex flex-col items-center justify-center'>
      <div tw='flex items-center justify-center'>
        <Icons.logo height={300} fill='white' />
      </div>
      <div
        style={{
          fontSize: 60,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          marginTop: 30,
          padding: '0 120px',
          lineHeight: 1.4,
          whiteSpace: 'pre-wrap',
          fontFamily: '"Inter"',
        }}
      >
        {title}
      </div>
    </div>,
    {
      ...imageSize,
      fonts: [
        {
          name: 'Inter',
          data: font,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
