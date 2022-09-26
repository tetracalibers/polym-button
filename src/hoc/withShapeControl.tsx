import {
  CSSt,
  getDefaultProps,
  getPropType,
  NotRequired
} from '@polym/react-props'
import { ElementType, ForwardedRef, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { DollarProps } from './DollarProps'

const conf = {
  circle: NotRequired<boolean>(false),
  radiusV: NotRequired<number>(1),
  radiusU: NotRequired<CSSt.Unit.Length>('em')
}

type ShapeProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<ShapeProps>(conf)

export const withShapeControl = <Props,>(
  MainComponent: ElementType,
  defaultV: ShapeProps = defaultProps
) => {
  const EnhancedComponent = styled(MainComponent)`
    ${(props: DollarProps<ShapeProps>) =>
      props.$circle
        ? css`
            border-radius: 50%;
          `
        : css`
            --radius: ${props.$radiusV! + props.$radiusU!};
            border-radius: var(--radius);
          `}
  `

  return forwardRef(
    (
      {
        circle = defaultV.circle,
        radiusV = defaultV.radiusV,
        radiusU = defaultV.radiusU,
        ...props
      }: ShapeProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $circle={circle}
          $radiusU={radiusU}
          $radiusV={radiusV}
        />
      )
    }
  )
}
