import { getDefaultProps, getPropType, Required } from '@polym/react-props'
import { ComponentPropsWithRef, ReactElement } from 'react'

const conf = {
  label: Required<string>('')
}

export type CharacterProps = getPropType<typeof conf>

export type CoreProps = Omit<ComponentPropsWithRef<'button'>, 'children'> & {
  icon: ReactElement
}

export type AllProps = CharacterProps & CoreProps

export const defaultProps = getDefaultProps<CharacterProps>(conf)
