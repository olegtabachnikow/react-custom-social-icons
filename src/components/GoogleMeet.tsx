import React, { FC } from 'react'
import { IconProps } from '../types'

export const GoogleMeet: FC<IconProps> = ({ width, height, color, simpleIcon }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color ? color : '#FFFFFF'}
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Google Meet'
      role='img'
      viewBox='0 0 512 512'
    >
      <rect width='512' height='512' fill='current' />
      <path d='M166 106v90h-90' fill={simpleIcon ? '#ffffff' : '#ea4335'} />
      <path d='M166 106v90h120v62l90-73v-49q0-30-30-30' fill={simpleIcon ? '#ffffff' : '#ffba00'} />
      <path d='M164 406v-90h122v-60l90 71v49q0 30-30 30' fill={simpleIcon ? '#ffffff' : '#00ac47'} />
      <path d='M286 256l90-73v146' fill={simpleIcon ? '#ffffff' : '#00832d'} />
      <path d='M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34' fill={simpleIcon ? '#ffffff' : '#00ac47'} />
      <path d='M76 314v62q0 30 30 30h60v-92' fill={simpleIcon ? '#ffffff' : '#0066da'} />
      <path d='M76 196h90v120h-90' fill={simpleIcon ? '#ffffff' : '#2684fc'} />
    </svg>
  )
}
