import React, { CSSProperties, FC } from 'react'
import { IconProps } from '../types'

const svgStyles: CSSProperties = {
  stroke: 'none',
  strokeWidth: 1,
  strokeDasharray: 'none',
  strokeLinecap: 'butt',
  strokeDashoffset: 0,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
}

export const Trustpilot: FC<IconProps> = ({ width, height, color, simpleIcon }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color ? color : '#fff'}
      width={width}
      height={height}
      viewBox='0 0 64 64'
      xmlSpace='preserve'
    >
      <defs></defs>
      <g transform='matrix(1 0 0 1 32 32)' id='7442dd46-e5a8-424d-9fec-da37a879fe2a'>
        <rect
          fill='current'
          style={{ ...svgStyles, fillRule: 'nonzero', opacity: 1 }}
          vectorEffect='non-scaling-stroke'
          x='-32'
          y='-32'
          rx='0'
          ry='0'
          width='64'
          height='64'
        />
      </g>
      <g transform='matrix(0.02 0 0 0.02 32 32)'>
        <g vectorEffect='non-scaling-stroke'>
          <g transform='matrix(3.12 0 0 3.12 0 0)'>
            <path
              style={{ ...svgStyles, fill: simpleIcon ? '#ffffff' : 'rgb(0,182,122)', fillRule: 'nonzero', opacity: 1 }}
              vectorEffect='non-scaling-stroke'
              transform=' translate(-399.94, -380.5)'
              d='M 799.89 290.83 L 494.44 290.83 L 400.09 0 L 305.45 290.83 L 0 290.54 L 247.37 470.46000000000004 L 152.72 761 L 400.09000000000003 581.37 L 647.16 761 L 552.81 470.46 z'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(3.12 0 0 3.12 272.24 454.4)'>
            <path
              fill='current'
              style={{ ...svgStyles, opacity: 1 }}
              vectorEffect='non-scaling-stroke'
              transform=' translate(-487.06, -525.91)'
              d='M 574.04 536.24 L 552.81 470.46000000000004 L 400.0899999999999 581.37 z'
              strokeLinecap='round'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
