import React, { FC } from 'react'
import { IconProps } from '../types'

export const Behance: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70483)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70483)'>
        <path
          d='M22.2067 23.1549C22.2067 23.1549 24.6677 22.9677 24.6677 20.0204C24.6677 17.0755 22.9986 15.6238 20.4473 15.6238L11.7075 15.6099V31.8846H20.6506C20.6506 31.8846 25.1221 32.0262 25.1221 27.0022C25.1221 27.0022 25.4506 23.1549 22.2067 23.1549ZM14.9595 18.0511H19.4311C19.4311 18.0511 20.9612 18.0764 20.9612 20.0619C20.9612 22.1198 19.4311 22.1198 19.4311 22.1198H14.9595V18.0511ZM19.8376 29.4434H14.9595V24.561H19.8376C19.8376 24.561 22.2766 24.5862 22.2766 27.0022C22.2766 29.4182 20.1888 29.4434 19.8376 29.4434Z'
          fill='white'
        />
        <path
          d='M32.0329 19.679C25.9248 19.679 25.9354 25.782 25.9354 25.782C25.9354 25.782 25.5289 31.885 32.0329 31.885C32.0329 31.885 37.724 31.885 37.724 27.0026H34.472C34.472 27.0026 34.472 29.4438 32.0329 29.4438C32.0329 29.4438 29.5939 29.4438 29.5939 26.1888C29.5939 26.1888 36.098 26.1888 37.724 26.1888C37.724 24.5614 37.724 19.679 32.0329 19.679ZM29.5939 24.5614C29.5939 24.5614 29.5402 22.1202 32.0329 22.1202C34.5248 22.1202 34.472 24.5614 34.472 24.5614H29.5939Z'
          fill='white'
        />
        <path d='M35.2852 17.2375H28.7811V18.865H35.2852V17.2375Z' fill='white' />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70483'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70483' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70483'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.0729167' stopColor='#272727' />
          <stop offset='0.973958' />
        </linearGradient>
      </defs>
    </svg>
  )
}
