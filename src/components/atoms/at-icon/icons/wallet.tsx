//* React Utilities
import React from 'react'

export const Wallet = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    color={props.color}
    fill='none'
    height={props.height}
    viewBox='0 0 21 21'
    width={props.width}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_811_101)' fill='currentColor' fillRule='evenodd' clipRule='evenodd'>
      <path
        d='M17.6475 1.75958C18.3389 1.75958 18.8975 2.31874 18.8975 3.00821C18.8975 3.69769 18.3389 4.25685 17.6475 4.25685H3.27246C2.92715 4.25685 2.64746 4.53779 2.64746 4.88116C2.64746 5.22454 2.92715 5.50548 3.27246 5.50548H17.6475C19.0264 5.50548 20.1475 6.62535 20.1475 8.00274V16.7432C20.1475 18.1206 19.0264 19.2404 17.6475 19.2404H2.64746C1.2666 19.2404 0.147461 18.1206 0.147461 16.7432V4.25685C0.147461 2.8775 1.2666 1.75958 2.64746 1.75958H17.6475ZM16.3975 13.6216C17.0889 13.6216 17.6475 13.0636 17.6475 12.373C17.6475 11.6823 17.0889 11.1243 16.3975 11.1243C15.7061 11.1243 15.1475 11.6823 15.1475 12.373C15.1475 13.0636 15.7061 13.6216 16.3975 13.6216Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='clip0_811_101' fill='currentColor' fillRule='evenodd' clipRule='evenodd'>
        <rect
          width='20'
          height='19.9781'
          transform='translate(0.147461 0.510925)'
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </clipPath>
    </defs>
  </svg>
)
