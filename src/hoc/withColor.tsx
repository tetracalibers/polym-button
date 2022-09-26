import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import * as CSS from 'csstype'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

const conf = {
  color: NotRequired<CSS.Property.Color>(undefined),
  bgColor: NotRequired<CSS.Property.BackgroundColor>(undefined),
  opacity: NotRequired<number | CssGlobal>(undefined)
}

type ColorProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<ColorProps>(conf)

export const withColor = <Props,>(
  MainComponent: ElementType,
  defaultV: ColorProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<ColorProps>>)`
    ${({ $color }) => isNotUndefined($color) && css`color: ${$color};`}
    ${({ $bgColor }) => isNotUndefined($bgColor) && css`background-color: ${$bgColor};`}
    ${({ $opacity }) => isNotUndefined($opacity) && css`opacity: ${$opacity};`}
  `

  return forwardRef(
    (
      {
        color = defaultV.color,
        bgColor = defaultV.bgColor,
        opacity = defaultV.opacity,
        ...props
      }: ColorProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $color={color}
          $bgColor={bgColor}
          $opacity={opacity}
        />
      )
    }
  )
}
