import { ForwardedRef, forwardRef, ReactElement } from 'react'
import { ButtonCore } from './ButtonCore'
import { defaultProps as d, AllProps } from './model'

type ButtonComponent = (props: AllProps) => ReactElement | null

const _Button = (
  { children, ...p }: AllProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const props = {
    ...p,
    violationCheck: p.violationCheck ?? d.violationCheck,
    type: p.type ?? d.type,
    cssReset: p.cssReset ?? d.cssReset
  }

  return (
    <ButtonCore {...props} ref={ref}>
      {children}
    </ButtonCore>
  )
}

export const Button: ButtonComponent = forwardRef(_Button)
