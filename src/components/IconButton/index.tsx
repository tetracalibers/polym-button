import { VisuallyHidden } from '@polym/a11y'
import { cloneElement, ForwardedRef, forwardRef } from 'react'
import { Button } from '../Button'
import { AllProps } from './model'
import { withShape } from '../../hoc/withShape'

const _IconButton = (
  { icon, label, ...props }: AllProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button {...props} ref={ref}>
      {cloneElement(icon, { 'aria-hidden': true })}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

export const IconButton = withShape<AllProps>(forwardRef(_IconButton))
