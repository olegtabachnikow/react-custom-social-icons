import React, { FC } from 'react'
import { IconProps } from '../types'

export const Youtube: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70744)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70744)'>
        <path
          d='M36.5314 17.8101C36.2334 16.6898 35.3519 15.806 34.2303 15.5031C32.2022 14.9595 24.0653 14.9595 24.0653 14.9595C24.0653 14.9595 15.9326 14.9595 13.9004 15.5031C12.7829 15.8018 11.9014 16.6857 11.5992 17.8101C11.0571 19.8433 11.0571 24.0881 11.0571 24.0881C11.0571 24.0881 11.0571 28.3329 11.5992 30.3661C11.8972 31.4865 12.7788 32.3703 13.9004 32.6732C15.9326 33.2168 24.0653 33.2168 24.0653 33.2168C24.0653 33.2168 32.2022 33.2168 34.2303 32.6732C35.3477 32.3744 36.2293 31.4906 36.5314 30.3661C37.0736 28.3329 37.0736 24.0881 37.0736 24.0881C37.0736 24.0881 37.0736 19.8433 36.5314 17.8101Z'
          fill='white'
        />
        <path d='M21.4662 28.001L28.2248 24.0881L21.4662 20.1753V28.001Z' fill='current' />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70744'
          x='9.1058'
          y='9.75621'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70744' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70744'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#DB0505' />
          <stop offset='1' stopColor='#FF0000' />
        </linearGradient>
      </defs>
    </svg>
  )
}
