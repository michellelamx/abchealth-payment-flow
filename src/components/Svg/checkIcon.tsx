import { forwardRef, type SVGProps } from 'react'

export const CheckIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ width = 25, height = 24, className }, ref) => {
  return (
    <svg
      ref={ref}
      height={height}
      width={width}
      viewBox='0 0 25 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Vector'
        d='M20.5001 6L9.50009 17L4.50009 12'
        stroke='#227C6C'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
})
