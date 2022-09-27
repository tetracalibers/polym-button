import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { MinSize } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

const conf = {
  minWidth: NotRequired<MinSize>(undefined),
  minHeight: NotRequired<MinSize>(undefined)
}

type MinSizeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<MinSizeProps>(conf)

export const withMinSize = <Props,>(
  MainComponent: ElementType,
  defaultV: MinSizeProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<MinSizeProps>>)`
    ${({ $minWidth }) => isNotUndefined($minWidth) && css`min-width: ${$minWidth};`}
    ${({ $minHeight }) => isNotUndefined($minHeight) && css`min-height: ${$minHeight};`}
  `

  return forwardRef(
    (
      {
        minWidth = defaultV.minWidth,
        minHeight = defaultV.minHeight,
        ...props
      }: MinSizeProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $minWidth={minWidth}
          $minHeight={minHeight}
        />
      )
    }
  )
}
