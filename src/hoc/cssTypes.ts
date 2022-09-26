import { CSSt } from '@polym/react-props'

export type CssGlobal = 'inherit' | 'initial' | 'revert' | 'unset'

export type IntrinsicSize = 'min-content' | 'max-content' | 'fit-content'

export type Length = `${number}${CSSt.Unit.Length}`

export type Percentage = `${number}%`

export type FitContent = `fit-content(${Length | Percentage})`

export type Size =
  | IntrinsicSize
  | Length
  | Percentage
  | FitContent
  | CssGlobal
  | 'auto'

export type MaxSize =
  | IntrinsicSize
  | Length
  | FitContent
  | CssGlobal
  | Percentage
  | 'none'

export type MinSize =
  | IntrinsicSize
  | Length
  | FitContent
  | CssGlobal
  | Percentage
  | 'auto'
