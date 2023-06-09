import React, { FC } from 'react'
import { IconProps } from '../types'

export const VK: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70768)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70768)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.4766 18.5426C36.6575 17.9769 36.4766 17.5612 35.6159 17.5612H32.7697C32.046 17.5612 31.7123 17.9203 31.5314 18.3163C31.5314 18.3163 30.084 21.6258 28.0335 23.7755C27.3702 24.3978 27.0686 24.5958 26.7068 24.5958C26.5259 24.5958 26.264 24.3978 26.264 23.8321V18.5426C26.264 17.8637 26.0539 17.5612 25.4508 17.5612H20.9782C20.5259 17.5612 20.2539 17.8763 20.2539 18.1749C20.2539 18.8185 21.2791 18.9669 21.3848 20.7772V24.709C21.3848 25.571 21.2188 25.7273 20.857 25.7273C19.8921 25.7273 17.545 22.403 16.153 18.5992C15.8802 17.8598 15.6065 17.5612 14.8791 17.5612H12.0329C11.2197 17.5612 11.057 17.9203 11.057 18.3163C11.057 19.0235 12.022 22.531 15.5499 27.1699C17.9019 30.3379 21.2156 32.0552 24.231 32.0552C26.0402 32.0552 26.264 31.6737 26.264 31.0167V28.6224C26.264 27.8595 26.4354 27.7073 27.0083 27.7073C27.4305 27.7073 28.1542 27.9053 29.8428 29.4327C31.7726 31.243 32.0908 32.0552 33.1763 32.0552H36.0225C36.8357 32.0552 37.2423 31.6737 37.0077 30.921C36.7511 30.1708 35.8297 29.0824 34.6071 27.7921C33.9437 27.0567 32.9486 26.2647 32.647 25.8687C32.2249 25.3596 32.3455 25.1332 32.647 24.6807C32.647 24.6807 36.1148 20.0983 36.4766 18.5426Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70768'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70768' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70768'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.0729167' stopColor='#1568C8' />
          <stop offset='0.927083' stopColor='#3F98FF' />
        </linearGradient>
      </defs>
    </svg>
  )
}
