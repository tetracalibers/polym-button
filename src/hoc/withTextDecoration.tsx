import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { CssGlobal, Length, Percentage } from './cssTypes'
import * as CSS from 'csstype'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type Combination<T extends string[], U = T[number], D = U> = D extends string
  ? `${D}` | `${D} ${Combination<[], Exclude<U, D>>}`
  : never

type TextDecorationLineKeywords =
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink'
type TextDecorationLine =
  | 'none'
  | Combination<TextDecorationLineKeywords[]>
  | CssGlobal

type TextDecorationLineLineStyle =
  | 'solid'
  | 'double'
  | 'dashed'
  | 'dotted'
  | 'wavy'
  | CssGlobal

type TextDecorationThickness =
  | 'auto'
  | 'from-font'
  | Length
  | Percentage
  | CssGlobal

const conf = {
  textDecorationColor: NotRequired<CSS.Property.TextDecorationColor>(undefined),
  textDecorationLine: NotRequired<TextDecorationLine>(undefined),
  textDecorationStyle: NotRequired<TextDecorationLineLineStyle>(undefined),
  textDecorationThickness: NotRequired<TextDecorationThickness>(undefined)
}

type TextDecorationProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<TextDecorationProps>(conf)

export const withTextDecoration = <Props,>(
  MainComponent: ElementType,
  defaultV: TextDecorationProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<TextDecorationProps>>)`
    ${({ $textDecorationColor }) => isNotUndefined($textDecorationColor) && css`text-decoration-color: ${$textDecorationColor};`}
    ${({ $textDecorationLine }) => isNotUndefined($textDecorationLine) && css`text-decoration-line: ${$textDecorationLine};`}
    ${({ $textDecorationStyle }) => isNotUndefined($textDecorationStyle) && css`text-decoration-style: ${$textDecorationStyle};`}
    ${({ $textDecorationThickness }) => isNotUndefined($textDecorationThickness) && css`text-decoration-thickness: ${$textDecorationThickness};`}
  `

  return forwardRef(
    (
      {
        textDecorationColor = defaultV.textDecorationColor,
        textDecorationLine = defaultV.textDecorationLine,
        textDecorationStyle = defaultV.textDecorationStyle,
        textDecorationThickness = defaultV.textDecorationThickness,
        ...props
      }: TextDecorationProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $textDecorationColor={textDecorationColor}
          $textDecorationLine={textDecorationLine}
          $textDecorationStyle={textDecorationStyle}
          $textDecorationThickness={textDecorationThickness}
        />
      )
    }
  )
}
