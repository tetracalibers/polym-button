import { withTextDecoration } from './withTextDecoration'
import { withLongText } from './withLongText'
import { withText } from './withText'
import { withOutline } from './withOutline'
import { withBorder } from './withBorder'
import { withColor } from './withColor'
import { withSize } from './withSize'
import { withMargin } from './withMargin'
import { withPadding } from './withPadding'
import { withShape } from './withShape'
import { withInnerPlace } from './withInnerPlace'
import { ForwardRefExoticComponent, ComponentProps } from 'react'
import { flow } from 'fp-ts/function'

const allHoC = [
  withTextDecoration,
  withLongText,
  withText,
  withOutline,
  withBorder,
  withColor,
  withSize,
  withMargin,
  withPadding,
  withShape,
  withInnerPlace
] as const

export type AllHoC = typeof allHoC[number]

export const applyHoC =
  <H extends AllHoC>(hoc: H) =>
  (d: Parameters<H>[1]) =>
  <C extends ForwardRefExoticComponent<any>>(component: C) =>
    hoc<ComponentProps<C>>(component, d) as ForwardRefExoticComponent<
      ComponentProps<C> & ComponentProps<ReturnType<H>>
    >

export const composeHoC = flow

export {
  withText,
  withLongText,
  withOutline,
  withBorder,
  withColor,
  withTextDecoration,
  withSize,
  withMargin,
  withPadding,
  withShape,
  withInnerPlace
}
