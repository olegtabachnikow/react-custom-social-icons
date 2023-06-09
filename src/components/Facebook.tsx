import React, { FC } from 'react'
import { IconProps } from '../types'

export const Facebook: FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70393)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g clipPath='url(#clip0_668_70393)' filter='url(#filter0_i_668_70393)'>
        <g filter='url(#filter1_i_668_70393)'>
          <path
            d='M30.4644 25.8529L31.2664 20.676H26.3259V17.3111C26.3259 15.8955 27.0156 14.5123 29.2212 14.5123H31.499V10.1039C30.1725 9.88905 28.8322 9.7728 27.4888 9.75612C23.4225 9.75612 20.7678 12.2394 20.7678 16.7287V20.676H16.2604V25.8529H20.7678V38.3743H26.3259V25.8529H30.4644Z'
            fill='white'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_i_668_70393'
          x='9.10582'
          y='9.1057'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70393' />
        </filter>
        <filter
          id='filter1_i_668_70393'
          x='16.2604'
          y='9.75612'
          width='15.2386'
          height='29.1182'
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
          <feGaussianBlur stdDeviation='1' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70393' />
        </filter>
        <linearGradient id='paint0_linear_668_70393' x1='24' y1='46.5975' x2='24' y2='0' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#0062E0' />
          <stop offset='1' stopColor='#19AFFF' />
        </linearGradient>
        <clipPath id='clip0_668_70393'>
          <rect width='29.2686' height='29.2686' fill='white' transform='translate(9.10582 9.1057)' />
        </clipPath>
      </defs>
    </svg>
  )
}
