//* React Utilities
import React from 'react'

export const GiftDark = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <g clipPath='url(#clip0_1_1431)'>
      <rect width='24' height='24' rx='6' fill='#010101' fillOpacity='0.8' />
      <g filter='url(#filter0_d_1_1431)'>
        <rect
          x='4'
          y='4'
          width='16'
          height='16'
          fill='url(#pattern0)'
          shapeRendering='crispEdges'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_d_1_1431'
        x='-16'
        y='4'
        width='56'
        height='56'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='20' />
        <feGaussianBlur stdDeviation='10' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 0.764706 0 0 0 0 0 0 0 0 1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_1431' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_1431' result='shape' />
      </filter>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_1_1431' transform='translate(0 -0.00833333) scale(0.0166667)' />
      </pattern>
      <clipPath id='clip0_1_1431'>
        <rect width='24' height='24' rx='6' fill='white' />
      </clipPath>
      <image
        id='image0_1_1431'
        width='60'
        height='61'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)
