import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import * as CSS from 'csstype'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, LineStyle, LineWidth } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type OutlineWidth = LineWidth | CssGlobal | Length
type OutlineStyle = 'none' | 'auto' | LineStyle | CssGlobal

const conf = {
  outlineColor: NotRequired<CSS.Property.OutlineColor>(undefined),
  outlineWidth: NotRequired<OutlineWidth>(undefined),
  outlineStyle: NotRequired<OutlineStyle>(undefined)
}

type OutlineProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<OutlineProps>(conf)

export const withOutline = <Props,>(
  MainComponent: ElementType,
  defaultV: OutlineProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<OutlineProps>>)`
    ${({ $outlineColor }) => isNotUndefined($outlineColor) && css`outline-color: ${$outlineColor};`}
    ${({ $outlineWidth }) => isNotUndefined($outlineWidth) && css`outline-width: ${$outlineWidth};`}
    ${({ $outlineStyle }) => isNotUndefined($outlineStyle) && css`outline-style: ${$outlineStyle};`}
  `

  return forwardRef(
    (
      {
        outlineColor = defaultV.outlineColor,
        outlineWidth = defaultV.outlineWidth,
        outlineStyle = defaultV.outlineStyle,
        ...props
      }: OutlineProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $outlineColor={outlineColor}
          $outlineWidth={outlineWidth}
          $outlineStyle={outlineStyle}
        />
      )
    }
  )
}
