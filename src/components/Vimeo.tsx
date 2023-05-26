import React, { FC } from 'react'
import { IconProps } from '../types'

export const Vimeo: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70756)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70756)'>
        <g clipPath='url(#clip0_668_70756)'>
          <path
            d='M37.061 18.5842C36.9453 20.9801 35.1764 24.2609 31.7552 28.4248C28.2179 32.7744 25.2252 34.949 22.7771 34.949C21.2611 34.949 19.9771 33.6249 18.9292 30.9757C18.2288 28.5474 17.5292 26.1193 16.8291 23.6909C16.0504 21.0432 15.2156 19.7176 14.3229 19.7176C14.1283 19.7176 13.4472 20.1051 12.2811 20.8769L11.057 19.385C12.341 18.3176 13.6077 17.2505 14.8539 16.1819C16.5663 14.7819 17.8518 14.0456 18.7086 13.9712C20.7334 13.7872 21.9796 15.0966 22.4474 17.8995C22.9529 20.9236 23.3026 22.8046 23.4993 23.5408C24.0828 26.0498 24.7249 27.3026 25.4266 27.3026C25.9711 27.3026 26.7891 26.489 27.8797 24.8617C28.9693 23.234 29.5529 21.9956 29.6317 21.1449C29.7868 19.7403 29.2029 19.0362 27.8797 19.0362C27.2569 19.0362 26.6148 19.1718 25.9542 19.4398C27.2327 15.4776 29.6757 13.5533 33.2816 13.6631C35.9548 13.7373 37.215 15.3776 37.061 18.5842Z'
            fill='white'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_i_668_70756'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70756' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70756'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#1D8DB5' />
          <stop offset='1' stopColor='#38C2F3' />
        </linearGradient>
        <clipPath id='clip0_668_70756'>
          <rect x='11.057' y='11.057' width='26.0166' height='26.0166' rx='8' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
