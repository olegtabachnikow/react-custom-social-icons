import React, { FC } from 'react'
import { IconProps } from '../types'

export const Tumblr: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70772)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70772)'>
        <path
          d='M29.9498 31.8369C29.4666 32.0676 28.5419 32.2684 27.8516 32.2866C25.7717 32.3427 25.368 30.824 25.3497 29.7212V21.6223H30.5697V17.6843H25.3693V11.057H21.5611C21.4986 11.057 21.3892 11.1118 21.3748 11.2513C21.1521 13.2796 20.2027 16.8396 16.2604 18.2617V21.6223H18.8912V30.124C18.8912 33.0336 21.0362 37.1684 26.699 37.0719C28.6083 37.0394 30.7299 36.2377 31.2001 35.5481L29.9498 31.8369Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70772'
          x='9.1058'
          y='9.1058'
          width='29.2686'
          height='29.7686'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='0.5' />
          <feGaussianBlur stdDeviation='1.25' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70772' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70772'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.0729167' stopColor='#303D4D' />
          <stop offset='0.927083' stopColor='#526378' />
        </linearGradient>
      </defs>
    </svg>
  )
}
