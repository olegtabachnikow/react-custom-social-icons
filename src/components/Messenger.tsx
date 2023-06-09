import React, { FC } from 'react'
import { IconProps } from '../types'

export const Messenger: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_radial_668_70431)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70431)'>
        <path
          d='M24.065 11.057C16.7383 11.057 11.0571 16.4261 11.0571 23.6747C11.0571 27.4665 12.6115 30.7445 15.1415 33.0079C15.3529 33.1965 15.483 33.4632 15.4895 33.7494L15.561 36.0648C15.5663 36.2352 15.6132 36.4016 15.6978 36.5496C15.7825 36.6975 15.9021 36.8225 16.0463 36.9133C16.1905 37.0042 16.3548 37.0583 16.5248 37.0708C16.6948 37.0833 16.8652 37.0539 17.0212 36.9851L19.6033 35.8469C19.8211 35.7493 20.0683 35.7331 20.2992 35.7949C21.4862 36.1201 22.7479 36.2957 24.065 36.2957C31.3917 36.2957 37.0729 30.9267 37.0729 23.678C37.0729 16.4293 31.3917 11.057 24.065 11.057Z'
          fill='white'
        />
        <path
          d='M16.2537 27.3657L20.0748 21.304C20.2185 21.0758 20.408 20.8799 20.6313 20.7286C20.8546 20.5773 21.1068 20.4739 21.3721 20.4251C21.6373 20.3762 21.9098 20.3828 22.1724 20.4445C22.4349 20.5063 22.6819 20.6218 22.8975 20.7837L25.9381 23.0634C26.0739 23.165 26.239 23.2196 26.4086 23.2191C26.5781 23.2185 26.7429 23.1627 26.8779 23.0601L30.9819 19.9447C31.5283 19.5285 32.2437 20.1854 31.8795 20.7675L28.0552 26.8259C27.9114 27.0541 27.7219 27.2501 27.4986 27.4014C27.2753 27.5526 27.0231 27.656 26.7579 27.7049C26.4926 27.7538 26.2201 27.7472 25.9576 27.6854C25.695 27.6237 25.4481 27.5082 25.2324 27.3462L22.1918 25.0666C22.0561 24.965 21.891 24.9103 21.7214 24.9109C21.5518 24.9115 21.3871 24.9673 21.252 25.0698L17.148 28.1852C16.6017 28.6015 15.8862 27.9478 16.2537 27.3657Z'
          fill='current'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70431'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70431' />
        </filter>
        <radialGradient
          id='paint0_radial_668_70431'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(8.04 47.9987) scale(52.8 52.7986)'
        >
          <stop stopColor='#0099FF' />
          <stop offset='0.6' stopColor='#A033FF' />
          <stop offset='0.9' stopColor='#FF5280' />
          <stop offset='1' stopColor='#FF7061' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_668_70431'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(15.4147 37.0729) scale(28.6174)'
        >
          <stop stopColor='#0099FF' />
          <stop offset='0.6' stopColor='#A033FF' />
          <stop offset='0.9' stopColor='#FF5280' />
          <stop offset='1' stopColor='#FF7061' />
        </radialGradient>
      </defs>
    </svg>
  )
}
