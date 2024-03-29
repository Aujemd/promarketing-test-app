//* React Utilities
import React from 'react'

export const ExclamationDark = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='24' height='24' rx='6' fill='#010101' fillOpacity='0.8' />
    <g clipPath='url(#clip0_1_1424)'>
      <path
        d='M12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4ZM12 19C8.14062 19 5 15.8594 5 12C5 8.14062 8.14062 5 12 5C15.8594 5 19 8.14062 19 12C19 15.8594 15.8594 19 12 19ZM12 9.75C12.4141 9.75 12.75 9.41437 12.75 9C12.75 8.58594 12.4141 8.25 12 8.25C11.5859 8.25 11.25 8.58437 11.25 9C11.25 9.41563 11.5844 9.75 12 9.75ZM13.5 15H12.5V11.5C12.5 11.225 12.275 11 12 11H11C10.725 11 10.5 11.225 10.5 11.5C10.5 11.775 10.725 12 11 12H11.5V15H10.5C10.225 15 10 15.225 10 15.5C10 15.775 10.225 16 10.5 16H13.5C13.7761 16 14 15.7761 14 15.5C14 15.225 13.775 15 13.5 15Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_1424'>
        <rect width='16' height='16' fill='white' transform='translate(4 4)' />
      </clipPath>
    </defs>
  </svg>
)
