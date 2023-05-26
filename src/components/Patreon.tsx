import React, { FC } from 'react'
import { IconProps } from '../types'

export const Patreon: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70580)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70580)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M27.458 11.9333C22.3398 11.9333 18.1762 16.105 18.1762 21.2325C18.1762 26.3445 22.3402 30.5037 27.458 30.5037C32.5604 30.5037 36.7111 26.3445 36.7111 21.2325C36.7115 16.105 32.5604 11.9333 27.458 11.9333Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.9333 36.7033H15.4653V11.9333H10.9333V36.7033Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70580'
          x='9'
          y='10'
          width='29'
          height='29.5'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70580' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70580'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.015625' stopColor='#FF424D' />
          <stop offset='0.973958' stopColor='#FF424D' />
        </linearGradient>
      </defs>
    </svg>
  )
}
