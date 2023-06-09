import React, { FC } from 'react'
import { IconProps } from '../types'

export const Twitter: FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      fill={color ? color : 'url(#paint0_linear_668_70406)'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='current' />
      <g clipPath='url(#clip0_668_70406)' filter='url(#filter0_i_668_70406)'>
        <path
          d='M37.8755 15.264C36.9697 15.6542 36.0175 15.9259 35.0424 16.0723C35.4983 15.9941 36.1691 15.1728 36.4361 14.8403C36.8418 14.3389 37.151 13.7664 37.3479 13.152C37.3479 13.1064 37.3935 13.0412 37.3479 13.0086C37.325 12.9961 37.2992 12.9895 37.273 12.9895C37.2469 12.9895 37.2211 12.9961 37.1981 13.0086C36.1393 13.5825 35.0124 14.0206 33.8441 14.3123C33.8033 14.3248 33.76 14.3259 33.7187 14.3156C33.6774 14.3052 33.6397 14.2838 33.6096 14.2537C33.5187 14.1453 33.4208 14.0429 33.3165 13.9473C32.84 13.52 32.2994 13.1702 31.7144 12.9108C30.9247 12.5866 30.0718 12.4462 29.22 12.5002C28.3935 12.5524 27.5865 12.7743 26.8493 13.152C26.1234 13.5503 25.4854 14.0913 24.9736 14.7426C24.4354 15.4129 24.0467 16.1908 23.8339 17.0241C23.6584 17.8166 23.6385 18.6358 23.7753 19.4359C23.7753 19.5728 23.7753 19.5924 23.6581 19.5728C19.0145 18.8884 15.2045 17.2392 12.0914 13.6996C11.9546 13.5431 11.883 13.5431 11.7722 13.6996C10.4176 15.7595 11.0754 19.0187 12.7687 20.6288C12.9966 20.8439 13.2311 21.0525 13.4786 21.2481C12.7022 21.1929 11.9448 20.9823 11.2512 20.6288C11.121 20.5441 11.0493 20.5897 11.0428 20.7462C11.0243 20.9631 11.0243 21.1811 11.0428 21.398C11.1787 22.4375 11.588 23.4221 12.2288 24.2514C12.8696 25.0806 13.7189 25.7246 14.69 26.1175C14.9267 26.2189 15.1733 26.2954 15.4259 26.3456C14.7072 26.4872 13.97 26.5093 13.2441 26.4108C13.0878 26.3782 13.0292 26.4629 13.0878 26.6129C14.0452 29.2203 16.1228 30.0156 17.6468 30.4588C17.8552 30.4914 18.0636 30.4914 18.298 30.5436C18.298 30.5436 18.298 30.5436 18.259 30.5827C17.8096 31.404 15.9925 31.9581 15.1589 32.2449C13.6373 32.792 12.015 33.001 10.4046 32.8577C10.1506 32.8186 10.0919 32.8251 10.0268 32.8577C9.96169 32.8903 10.0268 32.962 10.0985 33.0272C10.4241 33.2423 10.7497 33.4313 11.0884 33.6138C12.0966 34.1642 13.1625 34.6014 14.2666 34.9175C19.9849 36.495 26.4195 35.3347 30.7114 31.0651C34.085 27.7145 35.2704 23.0928 35.2704 18.4647C35.2704 18.2887 35.4853 18.1844 35.609 18.0931C36.4625 17.4275 37.215 16.6414 37.8429 15.7595C37.9516 15.628 38.0074 15.4606 37.9992 15.2901C37.9992 15.1923 37.9992 15.2119 37.8755 15.264Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_i_668_70406'
          x='10'
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
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_668_70406' />
        </filter>
        <linearGradient
          id='paint0_linear_668_70406'
          x1='0.975621'
          y1='3.35445e-07'
          x2='42.2769'
          y2='51.7079'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0CA8F7' />
          <stop offset='1' stopColor='#0096E1' />
        </linearGradient>
        <clipPath id='clip0_668_70406'>
          <rect width='28' height='28' fill='white' transform='translate(10 10)' />
        </clipPath>
      </defs>
    </svg>
  )
}
