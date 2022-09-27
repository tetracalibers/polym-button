import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type KeywordFontWeight = 'bold' | 'normal'
type RelativeFontWeight = 'lighter' | 'bolder'
type NumericFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type FontWeight =
  | KeywordFontWeight
  | RelativeFontWeight
  | NumericFontWeight
  | CssGlobal

type FontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | `oblique ${number}deg`
  | CssGlobal

const conf = {
  fontWeight: NotRequired<FontWeight>(undefined),
  fontStyle: NotRequired<FontStyle>(undefined)
}

type FontStyleProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<FontStyleProps>(conf)

export const withFontStyle = <Props,>(
  MainComponent: ElementType,
  defaultV: FontStyleProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<FontStyleProps>>)`
    &, & * {
      ${({ $fontWeight }) => isNotUndefined($fontWeight) && css`font-weight: ${$fontWeight};`}
      ${({ $fontStyle }) => isNotUndefined($fontStyle) && css`font-style: ${$fontStyle};`}
    }
  `

  return forwardRef(
    (
      {
        fontWeight = defaultV.fontWeight,
        fontStyle = defaultV.fontStyle,
        ...props
      }: FontStyleProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $fontWeight={fontWeight}
          $fontStyle={fontStyle}
        />
      )
    }
  )
}
