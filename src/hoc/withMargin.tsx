import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Length, Percentage } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type Margin = Length | Percentage | 'auto'

const conf = {
  margin: NotRequired<Margin>(undefined),
  marginX: NotRequired<Margin>(undefined),
  marginY: NotRequired<Margin>(undefined),
  marginBottom: NotRequired<Margin>(undefined),
  marginTop: NotRequired<Margin>(undefined),
  marginLeft: NotRequired<Margin>(undefined),
  marginRight: NotRequired<Margin>(undefined)
}

type MarginProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<MarginProps>(conf)

export const withMargin = <Props,>(
  MainComponent: ElementType,
  defaultV: MarginProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<MarginProps>>)`
    ${({ $margin }) => isNotUndefined($margin) && css`margin: ${$margin};`}
    ${({ $marginX }) => isNotUndefined($marginX) && css`
      margin-right: ${$marginX};
      margin-left: ${$marginX};
    `}
    ${({ $marginY }) => isNotUndefined($marginY) && css`
      margin-right: ${$marginY};
      margin-left: ${$marginY};
    `}
    ${({ $marginBottom }) => isNotUndefined($marginBottom) && css`margin-bottom: ${$marginBottom};`}
    ${({ $marginTop }) => isNotUndefined($marginTop) && css`margin-top: ${$marginTop};`}
    ${({ $marginRight }) => isNotUndefined($marginRight) && css`margin-right: ${$marginRight};`}
    ${({ $marginLeft }) => isNotUndefined($marginLeft) && css`margin-left: ${$marginLeft};`}
  `

  return forwardRef(
    (
      {
        margin = defaultV.margin,
        marginX = defaultV.marginX,
        marginY = defaultV.marginY,
        marginLeft = defaultV.marginLeft,
        marginRight = defaultV.marginRight,
        marginTop = defaultV.marginTop,
        marginBottom = defaultV.marginBottom,
        ...props
      }: MarginProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $margin={margin}
          $marginX={marginX}
          $marginY={marginY}
          $marginBottom={marginBottom}
          $marginLeft={marginLeft}
          $marginRight={marginRight}
          $marginTop={marginTop}
        />
      )
    }
  )
}
