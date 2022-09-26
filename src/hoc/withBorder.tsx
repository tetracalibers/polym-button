import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import * as CSS from 'csstype'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, LineStyle } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type BorderWidth = 'thin' | 'medium' | 'thick' | CssGlobal | Length
type BorderStyle = 'none' | 'hidden' | LineStyle | CssGlobal

const conf = {
  borderColor: NotRequired<CSS.Property.BorderColor>(undefined),
  borderWidth: NotRequired<BorderWidth>(undefined),
  borderStyle: NotRequired<BorderStyle>(undefined)
}

type BorderProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<BorderProps>(conf)

export const withBorder = <Props,>(
  MainComponent: ElementType,
  defaultV: BorderProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<BorderProps>>)`
    ${({ $borderColor }) => isNotUndefined($borderColor) && css`border-color: ${$borderColor};`}
    ${({ $borderWidth }) => isNotUndefined($borderWidth) && css`border-width: ${$borderWidth};`}
    ${({ $borderStyle }) => isNotUndefined($borderStyle) && css`border-style: ${$borderStyle};`}
  `

  return forwardRef(
    (
      {
        borderColor = defaultV.borderColor,
        borderWidth = defaultV.borderWidth,
        borderStyle = defaultV.borderStyle,
        ...props
      }: BorderProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $borderColor={borderColor}
          $borderWidth={borderWidth}
          $borderStyle={borderStyle}
        />
      )
    }
  )
}
