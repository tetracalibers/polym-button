import { ComponentStory } from '@storybook/react'
import { desc_ref } from './args/common/ref'
import { IconButton } from '../components/IconButton'
import { RiHeartAddLine } from 'react-icons/ri'
import React from 'react'

export default {
  title: 'IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    ...desc_ref
  }
}

const Template: ComponentStory<typeof IconButton> = ({ ...args }) => (
  <IconButton {...args} label="favorite" icon={<RiHeartAddLine />} />
)

export const playground = Template.bind({})
playground.args = {}
