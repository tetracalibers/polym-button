import { forwardRef, ReactElement } from 'react'
import { ButtonCore } from './ButtonCore'
import { defaultProps, AllProps } from './model'

type ButtonComponent = (props: AllProps) => ReactElement | null

const _Button = (
  { ref, children, ...props }: AllProps = {
    ...defaultProps
  } as AllProps
) => {
  return (
    <ButtonCore {...props} ref={ref}>
      {children}
    </ButtonCore>
  )
}

export const Button: ButtonComponent = forwardRef(_Button)
