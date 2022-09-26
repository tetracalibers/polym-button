import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, Percentage } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type Padding = Length | Percentage
type BoxSizing = CssGlobal | 'border-box' | 'content-box'

const conf = {
  padding: NotRequired<Padding>(undefined),
  paddingX: NotRequired<Padding>(undefined),
  paddingY: NotRequired<Padding>(undefined),
  paddingBottom: NotRequired<Padding>(undefined),
  paddingTop: NotRequired<Padding>(undefined),
  paddingLeft: NotRequired<Padding>(undefined),
  paddingRight: NotRequired<Padding>(undefined),
  boxSizing: NotRequired<BoxSizing>('border-box')
}

type PaddingProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<PaddingProps>(conf)

export const withPadding = <Props,>(
  MainComponent: ElementType,
  defaultV: PaddingProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<PaddingProps>>)`
    box-sizing: ${(props) => props.$boxSizing};
    ${({ $padding }) => isNotUndefined($padding) && css`padding: ${$padding};`}
    ${({ $paddingX }) => isNotUndefined($paddingX) && css`
      padding-right: ${$paddingX};
      padding-left: ${$paddingX};
    `}
    ${({ $paddingY }) => isNotUndefined($paddingY) && css`
      padding-right: ${$paddingY};
      padding-left: ${$paddingY};
    `}
    ${({ $paddingBottom }) => isNotUndefined($paddingBottom) && css`padding-bottom: ${$paddingBottom};`}
    ${({ $paddingTop }) => isNotUndefined($paddingTop) && css`padding-top: ${$paddingTop};`}
    ${({ $paddingRight }) => isNotUndefined($paddingRight) && css`padding-right: ${$paddingRight};`}
    ${({ $paddingLeft }) => isNotUndefined($paddingLeft) && css`padding-left: ${$paddingLeft};`}
  `

  return forwardRef(
    (
      {
        padding = defaultV.padding,
        paddingX = defaultV.paddingX,
        paddingY = defaultV.paddingY,
        paddingLeft = defaultV.paddingLeft,
        paddingRight = defaultV.paddingRight,
        paddingTop = defaultV.paddingTop,
        paddingBottom = defaultV.paddingBottom,
        boxSizing = defaultV.boxSizing,
        ...props
      }: PaddingProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $padding={padding}
          $paddingX={paddingX}
          $paddingY={paddingY}
          $paddingBottom={paddingBottom}
          $paddingLeft={paddingLeft}
          $paddingRight={paddingRight}
          $paddingTop={paddingTop}
          $boxSizing={boxSizing}
        />
      )
    }
  )
}
