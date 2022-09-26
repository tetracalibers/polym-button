import { getDefaultProps, getPropType, NotRequired } from '@polym/react-props'
import { ComponentPropsWithRef, ReactNode } from 'react'

export const buttonTypeOptions = ['submit', 'reset', 'button'] as const
type ButtonType = typeof buttonTypeOptions[number]

const conf = {
  type: NotRequired<ButtonType>('button'),
  cssReset: NotRequired<boolean>(false),
  violationCheck: NotRequired<boolean>(true)
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps = Omit<ComponentPropsWithRef<'button'>, 'type'> & {
  children: ReactNode
}

export type AllProps = CharacterProps & CoreProps

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  children: ''
}
