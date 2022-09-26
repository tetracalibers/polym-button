import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired
} from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Size, MaxSize, MinSize } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

const conf = {
  width: NotRequired<Size>(undefined),
  height: NotRequired<Size>(undefined),
  maxWidth: NotRequired<MaxSize>(undefined),
  maxHeight: NotRequired<MaxSize>(undefined),
  minWidth: NotRequired<MinSize>(undefined),
  minHeight: NotRequired<MinSize>(undefined)
}

type SizeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<SizeProps>(conf)

export const withSize = <Props,>(
  MainComponent: ElementType,
  defaultV: SizeProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<SizeProps>>)`
    ${({ $width }) => isNotUndefined($width) && css`width: ${$width};` }
    ${({ $height }) => isNotUndefined($height) && css`height: ${$height};`}
    ${({ $minWidth }) => isNotUndefined($minWidth) && css`min-width: ${$minWidth};`}
    ${({ $minHeight }) => isNotUndefined($minHeight) && css`min-height: ${$minHeight};`}
    ${({ $maxWidth }) => isNotUndefined($maxWidth) && css`max-width: ${$maxWidth};`}
    ${({ $maxHeight }) => isNotUndefined($maxHeight) && css`max-height: ${$maxHeight};`}
  `

  return forwardRef(
    (
      {
        width = defaultV.width,
        height = defaultV.height,
        minWidth = defaultV.minWidth,
        maxWidth = defaultV.maxWidth,
        minHeight = defaultV.minHeight,
        maxHeight = defaultV.maxHeight,
        ...props
      }: SizeProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $width={width}
          $height={height}
          $maxWidth={maxWidth}
          $maxHeight={maxHeight}
          $minWidth={minWidth}
          $minHeight={minHeight}
        />
      )
    }
  )
}
