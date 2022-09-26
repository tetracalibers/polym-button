import { ComponentStory } from '@storybook/react'
import { defaultProps } from '../components/Button/model'
import { desc_ButtonProps } from './args/Button'
import { desc_ref } from './args/common/ref'
import { Button } from '../components/Button'
import React from 'react'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Component that wraps the "button" tag in HTML'
      }
    }
  },
  argTypes: {
    ...desc_ref,
    ...desc_ButtonProps
  }
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Base button'
}
