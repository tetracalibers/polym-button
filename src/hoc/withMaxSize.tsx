import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { MaxSize } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

const conf = {
  maxWidth: NotRequired<MaxSize>(undefined),
  maxHeight: NotRequired<MaxSize>(undefined)
}

type MaxSizeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<MaxSizeProps>(conf)

export const withMaxSize = <Props,>(
  MainComponent: ElementType,
  defaultV: MaxSizeProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<MaxSizeProps>>)`
    ${({ $maxWidth }) => isNotUndefined($maxWidth) && css`max-width: ${$maxWidth};`}
    ${({ $maxHeight }) => isNotUndefined($maxHeight) && css`max-height: ${$maxHeight};`}
  `

  return forwardRef(
    (
      {
        maxWidth = defaultV.maxWidth,
        maxHeight = defaultV.maxHeight,
        ...props
      }: MaxSizeProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $maxWidth={maxWidth}
          $maxHeight={maxHeight}
        />
      )
    }
  )
}
