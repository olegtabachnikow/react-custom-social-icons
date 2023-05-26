import React, { FC } from 'react'
import { IconProps } from '../types'

export const Apple: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color ? color : '#000'}
      height={height}
      width={width}
      viewBox='0 0 612 612'
    >
      <rect width='612' height='612' fill='current' />
      <path
        fill='#f2f2f2'
        d='M465 390s-10 29-30 59c-5 9-29 43-58 43-21 0-35-15-62-15-33 0-46 15-67 15-11 1-22-5-34-16-77-73-81-181-52-225 18-29 48-47 81-48 26 0 54 17 65 17 8 0 50-20 74-18 33 3 56 15 73 38-49 24-66 117 10 150zM379 115c8 32-27 93-79 90-3-43 34-87 79-90z'
      />
    </svg>
  )
}
