import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ComponentPropsWithRef } from 'react'

export const buttonTypeOptions = ['submit', 'reset', 'button'] as const
type ButtonTypeOptions = typeof buttonTypeOptions[number]

const conf = {
  type: NotRequired<ButtonTypeOptions>('button'),
  cssReset: NotRequired<boolean>(false),
  violationCheck: NotRequired<boolean>(true)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps = ComponentPropsWithRef<'button'>

export type AllProps = CharacterProps & CoreProps

export const defaultProps = getDefaultProps<CharacterProps>(conf)
