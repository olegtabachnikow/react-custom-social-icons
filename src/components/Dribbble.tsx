import React, { CSSProperties, FC } from 'react'
import { IconProps } from '../types'

interface CustomCSSProperties extends CSSProperties {
  isCustomFont?: string
  fontFileUrl?: string
}

const svgStyles: CustomCSSProperties = {
  stroke: 'none',
  strokeWidth: 1,
  strokeDasharray: 'none',
  strokeLinecap: 'butt',
  strokeDashoffset: 0,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
  fill: 'rgb(255,255,255)',
  fillRule: 'evenodd',
  opacity: 1,
  isCustomFont: 'none',
  fontFileUrl: 'none',
}

export const Dribbble: FC<IconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width={width}
      height={height}
      viewBox='0 0 1000 1000'
      fill={color ? color : '#ea4c89'}
    >
      <rect x='0' y='0' width='100%' height='100%' fill='current' />
      <g transform='matrix(6.5036 0 0 6.5036 499.9978 499.9978)' id='572756'>
        <path
          style={svgStyles}
          vectorEffect='non-scaling-stroke'
          transform=' translate(-50, -50)'
          d='M 50 0 C 22.397 0 0 22.397 0 50 C 0 77.603 22.397 100 50 100 C 77.5488 100 100 77.603 100 50 C 100 22.397 77.5488 0 50 0 Z M 83.026 23.0477 C 88.9913 30.3145 92.5705 39.5879 92.679 49.6204 C 91.269 49.3492 77.1692 46.4751 62.961 48.2646 C 62.6356 47.5597 62.3644 46.8004 62.0391 46.0412 C 61.1714 43.9805 60.1952 41.8655 59.2191 39.859 C 74.9458 33.4599 82.1041 24.2408 83.026 23.0477 Z M 50 7.37527 C 60.846 7.37527 70.7701 11.4425 78.308 18.1128 C 77.5488 19.1974 71.0954 27.82 55.9111 33.5141 C 48.9154 20.6616 41.1605 10.141 39.9675 8.5141 C 43.167 7.75488 46.5293 7.37527 50 7.37527 Z M 31.833 11.3883 C 32.9718 12.9067 40.564 23.4816 47.6681 36.0629 C 27.7115 41.3774 10.0868 41.269 8.18872 41.269 C 10.9544 28.0369 19.9024 17.0282 31.833 11.3883 Z M 7.26681 50.0542 C 7.26681 49.6204 7.26681 49.1866 7.26681 48.7527 C 9.11063 48.8069 29.8265 49.0781 51.1388 42.679 C 52.3861 45.0651 53.5249 47.5054 54.6095 49.9458 C 54.0672 50.1085 53.4707 50.2712 52.9284 50.4338 C 30.9111 57.538 19.1974 76.9523 18.2213 78.5792 C 11.4425 71.0412 7.26681 61.0087 7.26681 50.0542 Z M 50 92.7332 C 40.1302 92.7332 31.0195 89.3709 23.8069 83.731 C 24.5662 82.1584 33.243 65.4555 57.321 57.0499 C 57.4295 56.9957 57.4837 56.9957 57.5922 56.9414 C 63.6117 72.5054 66.0521 85.5748 66.7028 89.3167 C 61.551 91.5401 55.9111 92.7332 50 92.7332 Z M 73.807 85.4122 C 73.3731 82.8091 71.0955 70.3362 65.5098 54.9892 C 78.9046 52.8742 90.6182 56.3449 92.0824 56.833 C 90.2386 68.7093 83.4056 78.9588 73.807 85.4122 Z'
          strokeLinecap='round'
        />
      </g>
    </svg>
  )
}
