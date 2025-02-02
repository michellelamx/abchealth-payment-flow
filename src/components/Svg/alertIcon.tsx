import { forwardRef, type SVGProps } from 'react'

export const AlertIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ width = 24, height = 24, className }, ref) => {
  return (
    <svg
      ref={ref}
      height={height}
      width={width}
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Union'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10.5 8C10.4981 7 10.9993 6 11.9999 6C13.0005 6 13.4979 7 13.4999 8C13.5018 9 13.5004 14 11.9999 14C10.5112 14 10.502 9.0776 10.5001 8.0241L10.5 8ZM11 16C11 15.4477 11.4477 15 12 15H12.01C12.5623 15 13.01 15.4477 13.01 16C13.01 16.5523 12.5623 17 12.01 17H12C11.4477 17 11 16.5523 11 16Z'
        fill='#C34648'
      />
    </svg>
  )
})
