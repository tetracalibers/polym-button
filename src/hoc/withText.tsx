import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, Percentage } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type AbsoluteFontSize =
  | 'xx-small'
  | 'x-small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
type RelativeFontSize = 'smaller' | 'larger'
type FontSize =
  | AbsoluteFontSize
  | RelativeFontSize
  | CssGlobal
  | Length
  | Percentage

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

type LineHeight = 'normal' | number

type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'justify-all'
  | 'match-parent'
  | CssGlobal

const conf = {
  fontSize: NotRequired<FontSize>(undefined),
  fontWeight: NotRequired<FontWeight>(undefined),
  fontStyle: NotRequired<FontStyle>(undefined),
  lineHeight: NotRequired<LineHeight>(undefined),
  textAlign: NotRequired<TextAlign>(undefined)
}

type TextProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<TextProps>(conf)

export const withText = <Props,>(
  MainComponent: ElementType,
  defaultV: TextProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<TextProps>>)`
    ${({ $fontSize }) => isNotUndefined($fontSize) && css`font-size: ${$fontSize};`}
    ${({ $fontWeight }) => isNotUndefined($fontWeight) && css`font-weight: ${$fontWeight};`}
    ${({ $fontStyle }) => isNotUndefined($fontStyle) && css`font-style: ${$fontStyle};`}
    ${({ $lineHeight }) => isNotUndefined($lineHeight) && css`line-height: ${$lineHeight};`}
    ${({ $textAlign }) => isNotUndefined($textAlign) && css`text-align: ${$textAlign};`}
  `

  return forwardRef(
    (
      {
        fontSize = defaultV.fontSize,
        fontWeight = defaultV.fontWeight,
        fontStyle = defaultV.fontStyle,
        lineHeight = defaultV.lineHeight,
        textAlign = defaultV.textAlign,
        ...props
      }: TextProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $fontSize={fontSize}
          $fontWeight={fontWeight}
          $fontStyle={fontStyle}
          $lineHeight={lineHeight}
          $textAlign={textAlign}
        />
      )
    }
  )
}
