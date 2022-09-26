import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired
} from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { DollarProps } from './DollarProps'

type CssGlobal = 'inherit' | 'initial' | 'revert' | 'unset'

type IntrinsicSize = 'min-content' | 'max-content' | 'fit-content'

type Length = `${number}${CSSt.Unit.Length}`

type Percentage = `${number}%`

type FitContent = `fit-content(${Length | Percentage})`

type Size =
  | IntrinsicSize
  | Length
  | Percentage
  | FitContent
  | CssGlobal
  | 'auto'

type MaxSize =
  | IntrinsicSize
  | Length
  | FitContent
  | CssGlobal
  | Percentage
  | 'none'

type MinSize =
  | IntrinsicSize
  | Length
  | FitContent
  | CssGlobal
  | Percentage
  | 'auto'

const conf = {
  width: NotRequired<Size>('auto'),
  height: NotRequired<Size>('auto'),
  maxWidth: NotRequired<MaxSize>('none'),
  maxHeight: NotRequired<MaxSize>('none'),
  minWidth: NotRequired<MinSize>('auto'),
  minHeight: NotRequired<MinSize>('auto')
}

type SizeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<SizeProps>(conf)

export const withSizeControl = <Props,>(
  MainComponent: ElementType,
  defaultV: SizeProps = defaultProps
) => {
  const EnhancedComponent = styled(MainComponent)`
    ${(props: DollarProps<SizeProps>) => css`
      width: ${props.$width};
      height: ${props.$height};
      min-width: ${props.$minWidth};
      max-width: ${props.$maxWidth};
      min-height: ${props.$minHeight};
      max-height: ${props.$maxHeight};
    `}
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
