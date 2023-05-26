import React, { FC } from 'react'
import { IconProps } from '../types'

export const Pinterest: FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70428)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <path
        d='M22.4758 9.85181C17.8344 10.3827 13.2093 14.2302 13.0184 19.7263C12.8984 23.082 13.8283 25.5995 16.9453 26.3065C18.298 23.8616 16.509 23.3223 16.2308 21.5536C15.0882 14.3057 24.3902 9.36284 29.258 14.423C32.6259 17.9269 30.4088 28.7066 24.9765 27.5862C19.7733 26.516 27.5236 17.9352 23.3703 16.2504C19.9942 14.8812 18.1998 20.4388 19.8006 23.1994C18.8625 27.9466 16.8417 32.42 17.6598 38.3743C20.3132 36.4017 21.2077 32.624 21.9413 28.6843C23.2748 29.5141 23.9866 30.3775 25.6883 30.5116C31.9632 31.009 35.4675 24.0935 34.6112 17.7145C33.8503 12.0592 28.3417 9.18122 22.4758 9.85181Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_668_70428'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CC0606' />
          <stop offset='1' stopColor='#FF0000' />
        </linearGradient>
      </defs>
    </svg>
  )
}
