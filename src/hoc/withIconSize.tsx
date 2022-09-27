import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, Percentage } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type IconSize = CssGlobal | Length | Percentage

const conf = {
  iconSize: NotRequired<IconSize>(undefined)
}

type IconSizeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<IconSizeProps>(conf)

export const withIconSize = <Props,>(
  MainComponent: ElementType,
  defaultV: IconSizeProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<IconSizeProps>>)`
    &, & * {
      ${({ $iconSize }) => isNotUndefined($iconSize) && css`font-size: ${$iconSize};`}
    }
  `

  return forwardRef(
    (
      { iconSize = defaultV.iconSize, ...props }: IconSizeProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return <EnhancedComponent {...props} ref={ref} $iconSize={iconSize} />
    }
  )
}
