import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SectionDivider from './SectionDivider'

export default {
  title: 'Components/SectionDivider',
  component: SectionDivider,
} as ComponentMeta<typeof SectionDivider>

const Template: ComponentStory<typeof SectionDivider> = () => (
  <SectionDivider>進化</SectionDivider>
)

export const Default = Template.bind({})
