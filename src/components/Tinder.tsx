import React, { FC } from 'react'
import { IconProps } from '../types'

export const Tinder: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70615)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70615)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.1017 21.3295C25.1881 19.6332 26.0538 15.2146 25.4045 11.1521C25.4045 11.0055 25.5344 10.9008 25.6642 10.9426C30.5341 13.2462 36.0101 18.2721 36.0101 25.8109C36.0101 31.5906 31.3783 36.7003 24.647 36.7003C22.245 36.806 19.8751 36.1347 17.9113 34.7925C15.9475 33.4503 14.5016 31.5135 13.8018 29.2879C13.102 27.0622 13.1882 24.6745 14.0468 22.5016C14.9054 20.3286 16.4875 18.4942 18.5433 17.2878C18.6732 17.2041 18.8464 17.2878 18.8464 17.4344C18.9113 18.2092 19.1277 20.1568 20.0151 21.3295H20.1017Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70615'
          x='10'
          y='9'
          width='30'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70615' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70615'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.0729167' stopColor='#F72141' />
          <stop offset='0.973958' stopColor='#FB5971' />
        </linearGradient>
      </defs>
    </svg>
  )
}
