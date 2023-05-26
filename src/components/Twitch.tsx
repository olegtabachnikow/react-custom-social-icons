import React, { FC } from 'react'
import { IconProps } from '../types'

export const Twitch: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70748)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70748)'>
        <g clipPath='url(#clip0_668_70748)'>
          <path
            d='M17.6094 11.6352L12.7915 16.1051V32.197H18.5729V36.667L23.3908 32.197H27.2451L35.9173 24.1511V11.6352H17.6094ZM33.9902 23.2571L30.1359 26.833H26.2815L22.909 29.962V26.833H18.5729V13.4232H33.9902V23.2571Z'
            fill='white'
          />
          <path d='M31.1 16.5521H29.1728V21.9161H31.1V16.5521Z' fill='white' />
          <path d='M25.8015 16.5521H23.8743V21.9161H25.8015V16.5521Z' fill='white' />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_i_668_70748'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70748' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70748'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#732ADF' />
          <stop offset='1' stopColor='#9146FF' />
        </linearGradient>
        <clipPath id='clip0_668_70748'>
          <rect x='11.057' y='11.057' width='26.0166' height='26.0166' rx='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
