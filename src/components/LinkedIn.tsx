import React, { FC } from 'react'
import { IconProps } from '../types'

export const LinkedIn: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint1_linear_668_70500)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter0_i_668_70500)'>
        <path
          d='M12.8309 33.1761H16.9699V23.1242L11.057 18.6896V31.4022C11.057 32.3837 11.8523 33.1761 12.8309 33.1761Z'
          fill='#4285F4'
        />
        <path
          d='M31.1608 33.1761H35.2998C36.2813 33.1761 37.0736 32.3808 37.0736 31.4022V18.6896L31.1608 23.1242'
          fill='#34A853'
        />
        <path
          d='M31.1608 15.4376V23.1243L37.0736 18.6897V16.3245C37.0736 14.1308 34.5695 12.8803 32.8164 14.1959'
          fill='#FBBC04'
        />
        <path d='M16.9699 23.1242V15.4375L24.0653 20.759L31.1607 15.4375V23.1242L24.0653 28.4457' fill='#EA4335' />
        <path
          d='M11.057 16.3245V18.6897L16.9699 23.1243V15.4376L15.3143 14.1959C13.5582 12.8803 11.057 14.1308 11.057 16.3245Z'
          fill='#C5221F'
        />
      </g>
      <rect width='48' height='48' fill='current' />
      <g filter='url(#filter1_i_668_70500)'>
        <path
          d='M18.5384 35.2008V19.2614H13.2451V35.2008H18.539H18.5384ZM15.8929 17.0856C17.7384 17.0856 18.8873 15.8616 18.8873 14.332C18.8528 12.7676 17.7384 11.5778 15.928 11.5778C14.1163 11.5778 12.9331 12.7676 12.9331 14.3319C12.9331 15.8615 14.0816 17.0854 15.8582 17.0854H15.8924L15.8929 17.0856ZM21.4683 35.2008H26.7612V26.3005C26.7612 25.8247 26.7957 25.3477 26.9356 25.0079C27.318 24.0557 28.189 23.0701 29.6516 23.0701C31.5664 23.0701 32.3329 24.5316 32.3329 26.6746V35.2008H37.6256V26.0616C37.6256 21.166 35.0146 18.8877 31.5322 18.8877C28.677 18.8877 27.4231 20.485 26.7264 21.5728H26.7616V19.262H21.4686C21.5377 20.7573 21.4682 35.2013 21.4682 35.2013L21.4683 35.2008Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70500'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70500' />
        </filter>
        <filter
          id='filter1_i_668_70500'
          x='9'
          y='9'
          width='29'
          height='29.5'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70500' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70500'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset='1' stopColor='#323232' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_668_70500'
          x1='27.3174'
          y1='49.4315'
          x2='4.87811'
          y2='-1.02789e-06'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#006699' />
          <stop offset='1' stopColor='#058CCF' />
        </linearGradient>
      </defs>
    </svg>
  )
}
