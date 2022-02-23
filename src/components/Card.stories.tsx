import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => (
  <div className="flex">
    <Card {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Documentation',
  description: 'Find in-depth information about Next.js features and API.',
  link: '#',
}
