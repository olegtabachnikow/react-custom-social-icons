import React, { FC } from 'react'
import { IconProps } from '../types'
const svgStyle: React.CSSProperties = { mixBlendMode: 'normal' }
export const Google: FC<IconProps> = ({ color, width, height, simpleIcon }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0,0,256,256'
      width={width}
      height={height}
      fillRule='nonzero'
      fill={color ? color : '#FFFFFF'}
    >
      <g transform='translate(32,32) scale(0.75,0.75)'>
        <g
          fill='current'
          fillRule='nonzero'
          stroke='none'
          strokeWidth='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
          strokeMiterlimit='10'
          strokeDasharray=''
          strokeDashoffset='0'
          fontFamily='none'
          fontWeight='none'
          fontSize='none'
          textAnchor='none'
          style={svgStyle}
        >
          <path d='M-42.66667,298.66667v-341.33333h341.33333v341.33333z' id='bgRectangle'></path>
        </g>
        <g
          fill='current'
          fillRule='nonzero'
          stroke='none'
          strokeWidth='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
          strokeMiterlimit='10'
          strokeDasharray=''
          strokeDashoffset='0'
          fontFamily='none'
          fontWeight='none'
          fontSize='none'
          textAnchor='none'
          style={svgStyle}
        >
          <path
            d='M42.66667,298.66667c-47.1283,0 -85.33333,-38.20503 -85.33333,-85.33333v-170.66667c0,-47.1283 38.20503,-85.33333 85.33333,-85.33333h170.66667c47.1283,0 85.33333,38.20503 85.33333,85.33333v170.66667c0,47.1283 -38.20503,85.33333 -85.33333,85.33333z'
            id='shape'
          ></path>
        </g>
        <g
          fill='none'
          fillRule='nonzero'
          stroke='none'
          strokeWidth='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
          strokeMiterlimit='10'
          strokeDasharray=''
          strokeDashoffset='0'
          fontFamily='none'
          fontWeight='none'
          fontSize='none'
          textAnchor='none'
          style={svgStyle}
        >
          <g transform='scale(5.33333,5.33333)'>
            <path
              d='M43.611,20.083h-1.611v-0.083h-18v8h11.303c-1.649,4.657 -6.08,8 -11.303,8c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-11.045,0 -20,8.955 -20,20c0,11.045 8.955,20 20,20c11.045,0 20,-8.955 20,-20c0,-1.341 -0.138,-2.65 -0.389,-3.917z'
              fill={simpleIcon ? '#ffffff' : '#ffc107'}
            ></path>
            <path
              d='M6.306,14.691l6.571,4.819c1.778,-4.402 6.084,-7.51 11.123,-7.51c3.059,0 5.842,1.154 7.961,3.039l5.657,-5.657c-3.572,-3.329 -8.35,-5.382 -13.618,-5.382c-7.682,0 -14.344,4.337 -17.694,10.691z'
              fill={simpleIcon ? '#ffffff' : '#ff3d00'}
            ></path>
            <path
              d='M24,44c5.166,0 9.86,-1.977 13.409,-5.192l-6.19,-5.238c-2.008,1.521 -4.504,2.43 -7.219,2.43c-5.202,0 -9.619,-3.317 -11.283,-7.946l-6.522,5.025c3.31,6.477 10.032,10.921 17.805,10.921z'
              fill={simpleIcon ? '#ffffff' : '#4caf50'}
            ></path>
            <path
              d='M43.611,20.083h-1.611v-0.083h-18v8h11.303c-0.792,2.237 -2.231,4.166 -4.087,5.571c0.001,-0.001 0.002,-0.001 0.003,-0.002l6.19,5.238c-0.438,0.398 6.591,-4.807 6.591,-14.807c0,-1.341 -0.138,-2.65 -0.389,-3.917z'
              fill={simpleIcon ? '#ffffff' : '#1976d2'}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}
