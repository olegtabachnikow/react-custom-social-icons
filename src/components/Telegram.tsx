import React, { FC } from 'react'
import { IconProps } from '../types'

export const Telegram: FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70435)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70435)'>
        <path
          d='M12.5327 22.5811C12.5327 22.5811 23.5896 17.7516 27.4243 16.0511C28.8944 15.3709 33.8795 13.1942 33.8795 13.1942C33.8795 13.1942 36.1804 12.242 35.9886 14.5546C35.9247 15.507 35.4134 18.8399 34.9022 22.445C34.1352 27.5466 33.3043 33.1242 33.3043 33.1242C33.3043 33.1242 33.1765 34.6888 32.09 34.9608C31.0035 35.2329 29.2139 34.0086 28.8944 33.7364C28.6386 33.5324 24.1009 30.4714 22.4392 28.975C21.9918 28.5669 21.4805 27.7507 22.503 26.7984C24.8039 24.5537 27.5521 21.7649 29.2139 19.9963C29.9809 19.18 30.7478 17.2755 27.5521 19.5881C23.0144 22.9212 18.5405 26.0501 18.5405 26.0501C18.5405 26.0501 17.5179 26.7303 15.6005 26.1181C13.6831 25.506 11.4461 24.6897 11.4461 24.6897C11.4461 24.6897 9.91231 23.6694 12.5327 22.5811Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70435'
          x='9'
          y='10'
          width='28'
          height='28.5'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70435' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70435'
          x1='4.22769'
          y1='3.57728'
          x2='44.2282'
          y2='46.8298'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0088CC' />
          <stop offset='1' stopColor='#0083C5' />
        </linearGradient>
      </defs>
    </svg>
  )
}
