//* React Utilities
import React from 'react'

export const ArrowDown = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    color={props.color}
    fill='none'
    height={props.height}
    viewBox='0 0 24 24'
    width={props.width}
    xmlns='http://www.w3.org/2000/svg'
    strokeWidth='1.5'
    {...props}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
  </svg>
)
