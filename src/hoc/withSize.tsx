import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { Size } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

const conf = {
  width: NotRequired<Size>(undefined),
  height: NotRequired<Size>(undefined)
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
  `

  return forwardRef(
    (
      {
        width = defaultV.width,
        height = defaultV.height,
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
        />
      )
    }
  )
}
