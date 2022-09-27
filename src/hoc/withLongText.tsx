import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ElementType, forwardRef, ForwardedRef } from 'react'
import styled, { css } from 'styled-components'
import { CssGlobal, Length, Percentage } from './cssTypes'
import { DollarProps } from './DollarProps'
import { isNotUndefined } from './util'

type TextOverflow = 'clip' | 'ellipsis' | CssGlobal

type WhiteSpace =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-space'
  | CssGlobal

type WordBreak = 'normal' | 'break-all' | 'keep-all' | CssGlobal

type Hyphens = 'none' | 'manual' | 'auto' | CssGlobal

type WordSpacing = 'normal' | Length | Percentage | CssGlobal

const conf = {
  textOverflow: NotRequired<TextOverflow>(undefined),
  whiteSpace: NotRequired<WhiteSpace>(undefined),
  wordBreak: NotRequired<WordBreak>(undefined),
  hyphens: NotRequired<Hyphens>(undefined),
  wordSpacing: NotRequired<WordSpacing>(undefined)
}

type LongTextProps = getPropType<typeof conf>

const defaultProps = getDefaultProps<LongTextProps>(conf)

export const withLongText = <Props,>(
  MainComponent: ElementType,
  defaultV: LongTextProps = defaultProps
) => {
  // prettier-ignore
  const EnhancedComponent = styled(MainComponent as ElementType<DollarProps<LongTextProps>>)`
    ${({ $textOverflow }) => isNotUndefined($textOverflow) && css`text-overflow: ${$textOverflow};`}
    ${({ $whiteSpace }) => isNotUndefined($whiteSpace) && css`white-space: ${$whiteSpace};`}
    ${({ $wordBreak }) => isNotUndefined($wordBreak) && css`word-break: ${$wordBreak};`}
    ${({ $hyphens }) => isNotUndefined($hyphens) && css`hyphens: ${$hyphens};`}
    ${({ $wordSpacing }) => isNotUndefined($wordSpacing) && css`word-spacing: ${$wordSpacing};`}
  `

  return forwardRef(
    (
      {
        textOverflow = defaultV.textOverflow,
        whiteSpace = defaultV.whiteSpace,
        wordBreak = defaultV.wordBreak,
        hyphens = defaultV.hyphens,
        wordSpacing = defaultV.wordSpacing,
        ...props
      }: LongTextProps & Props,
      ref: ForwardedRef<typeof MainComponent>
    ) => {
      return (
        <EnhancedComponent
          {...props}
          ref={ref}
          $textOverflow={textOverflow}
          $whiteSpace={whiteSpace}
          $wordBreak={wordBreak}
          $hyphens={hyphens}
          $wordSpacing={wordSpacing}
        />
      )
    }
  )
}
