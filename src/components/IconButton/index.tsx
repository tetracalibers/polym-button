import { VisuallyHidden } from '@polym/a11y'
import { cloneElement, forwardRef } from 'react'
import { withShapeControl } from '../../hoc/withShapeControl'
import { Button } from '../Button'
import { AllProps } from './model'

const _IconButton = ({ ref, icon, label, ...props }: AllProps) => {
  return (
    <Button {...props} ref={ref}>
      {cloneElement(icon, { 'aria-hidden': true })}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

export const IconButton = withShapeControl<AllProps>(forwardRef(_IconButton))
