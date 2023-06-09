import React, { FC } from 'react'
import { IconProps } from '../types'

export const Gmail: FC<IconProps> = ({ width, height, color, simpleIcon }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : '#FFFFFF'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70491)'>
        <path
          d='M12.8309 33.1761H16.9699V23.1242L11.057 18.6896V31.4022C11.057 32.3837 11.8523 33.1761 12.8309 33.1761Z'
          fill={simpleIcon ? '#ffffff' : '#4285F4'}
        />
        <path
          d='M31.1608 33.1761H35.2998C36.2813 33.1761 37.0736 32.3808 37.0736 31.4022V18.6896L31.1608 23.1242'
          fill={simpleIcon ? '#ffffff' : '#34A853'}
        />
        <path
          d='M31.1608 15.4376V23.1243L37.0736 18.6897V16.3245C37.0736 14.1308 34.5695 12.8803 32.8164 14.1959'
          fill={simpleIcon ? '#ffffff' : '#FBBC04'}
        />
        <path
          d='M16.9699 23.1242V15.4375L24.0653 20.759L31.1608 15.4375V23.1242L24.0653 28.4457'
          fill={simpleIcon ? '#ffffff' : '#EA4335'}
        />
        <path
          d='M11.057 16.3245V18.6897L16.9699 23.1243V15.4376L15.3143 14.1959C13.5582 12.8803 11.057 14.1308 11.057 16.3245Z'
          fill={simpleIcon ? '#ffffff' : '#C5221F'}
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70491'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70491' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70491'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopColor='#323232' />
        </linearGradient>
      </defs>
    </svg>
  )
}
