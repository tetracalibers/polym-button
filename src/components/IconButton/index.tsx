import { VisuallyHidden } from '@polym/a11y'
import { cloneElement, ForwardedRef, forwardRef } from 'react'
import { Button } from '../Button'
import { AllProps } from './model'
import {
  applyHoC,
  withColor,
  withInnerPlace,
  withShape,
  withSize,
  withText,
  composeHoC
} from '../../hoc'

const _IconButton = (
  { icon, label, ...props }: AllProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button {...props} ref={ref} cssReset>
      {cloneElement(icon, { 'aria-hidden': true })}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

const component = forwardRef(_IconButton)

const applyShape = applyHoC<typeof withShape>(withShape)({
  circle: true
})
const applySize = applyHoC<typeof withSize>(withSize)({
  width: '3rem',
  height: '3rem'
})
const applyColor = applyHoC<typeof withColor>(withColor)({
  bgColor: '#4d608b',
  color: '#f5f4f0'
})
const applyText = applyHoC<typeof withText>(withText)({
  fontSize: '2rem'
})
const applyInnerPlace = applyHoC<typeof withInnerPlace>(withInnerPlace)({
  center: true
})

export const IconButton = composeHoC(
  applyShape,
  applySize,
  applyColor,
  applyText,
  applyInnerPlace
)(component)
