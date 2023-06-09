import React, { FC } from 'react'
import { IconProps } from '../types'

export const Zoom: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70457)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70457)'>
        <g clipPath='url(#clip0_668_70457)'>
          <path
            d='M11.057 18.6653C11.057 17.6963 11.889 16.9108 12.9152 16.9108H24.0644C27.1433 16.9108 29.639 19.2674 29.639 22.1745V29.1928C29.639 30.1618 28.8071 30.9474 27.7808 30.9474H16.6316C13.5529 30.9474 11.057 28.5908 11.057 25.6836V18.6653Z'
            fill='white'
          />
          <path
            d='M30.5699 23.4932C30.5699 22.6433 30.8966 21.8222 31.4894 21.1824L34.6312 17.7922C35.4785 16.8777 37.0736 17.4436 37.0736 18.6587V29.2C37.0736 30.415 35.4785 30.9809 34.6312 30.0664L31.4894 26.6762C30.8966 26.0365 30.5699 25.2153 30.5699 24.3654V23.4932Z'
            fill='white'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_i_668_70457'
          x='11.057'
          y='11.057'
          width='26.0166'
          height='26.5166'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70457' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70457'
          x1='4.22769'
          y1='3.57728'
          x2='44.2282'
          y2='46.8298'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3984FD' />
          <stop offset='1' stopColor='#0155DD' />
        </linearGradient>
        <clipPath id='clip0_668_70457'>
          <rect x='11.057' y='11.057' width='26.0166' height='26.0166' rx='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
