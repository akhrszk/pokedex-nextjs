import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FlavorText from './FlavorText'

export default {
  title: 'Components/FlavorText',
  component: FlavorText,
} as ComponentMeta<typeof FlavorText>

const Template: ComponentStory<typeof FlavorText> = args => (
  <FlavorText {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: `うまれたときから せなかに\nふしぎな タネが うえてあって\nからだと ともに そだつという。`,
}
