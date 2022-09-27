import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { DollarProps } from './DollarProps'

export const placeOpt = ['start', 'end', 'center'] as const

type Place = typeof placeOpt[number]

const conf = {
  center: NotRequired<boolean>(false),
  placeX: NotRequired<Place>(undefined),
  placeY: NotRequired<Place>(undefined),
  inline: NotRequired<boolean>(false)
}

type InnerPlaceProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<InnerPlaceProps>(conf)

export const withInnerPlace = <Props,>(
  MainComponent: ElementType,
  defaultV: InnerPlaceProps = defaultProps
) => {
  const EnhancedComponent = styled(
    MainComponent as ElementType<DollarProps<InnerPlaceProps>>
  )`
    ${({ $inline }) =>
      $inline
        ? css`
            display: inline-flex;
          `
        : css`
            display: flex;
          `}
    ${({ $placeX }) =>
      $placeX &&
      css`
        justify-content: ${$placeX};
      `}
    ${({ $placeY }) =>
      $placeY &&
      css`
        align-items: ${$placeY};
      `}
    ${({ $center }) =>
      $center &&
      css`
        justify-content: center;
        align-items: center;
      `}
  `

  return forwardRef(
    (
      {
        center = defaultV.center,
        placeX = defaultV.placeX,
        placeY = defaultV.placeY,
        inline = defaultV.inline,
        ...props
      }: InnerPlaceProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $center={center}
          $placeY={placeY}
          $placeX={placeX}
          $inline={inline}
        />
      )
    }
  )
}
