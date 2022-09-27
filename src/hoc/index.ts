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
import { ForwardRefExoticComponent, ComponentProps } from 'react'

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
  withShape
] as const

export type AllHoC = typeof allHoC[number]

export const applyHoC =
  <H extends AllHoC>(hoc: H) =>
  (d: Parameters<H>[1]) =>
  <C extends ForwardRefExoticComponent<any>>(component: C) =>
    hoc<ComponentProps<C>>(component, d) as ForwardRefExoticComponent<
      ComponentProps<C> & ComponentProps<ReturnType<H>>
    >

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
  withShape
}
