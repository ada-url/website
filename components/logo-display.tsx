"use client";
import Image from 'next/image'
import { useTheme } from 'next-themes'
import type { FC } from 'react';

const LogoDisplay: FC = () => (
    <div className='flex flex-col items-center justify-center'>
        <Image
          src={`/temp-logo-${useTheme().theme === 'light' ? 'black' : 'white'}.svg`}
          alt='Ada URL Parser'
          width={300}
          height={300}
          className='mb-8'
        />
      </div>
)

export default LogoDisplay
