import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Grid from './Grid'
import Card from './Card'

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = () => (
  <Grid>
    <Card
      title="Documentation"
      description="Find in-depth information about Next.js features and API."
      link="#"
    />
    <Card
      title="Learn"
      description="Learn about Next.js in an interactive course with quizzes!"
      link="#"
    />
    <Card
      title="Examples"
      description="Discover and deploy boilerplate example Next.js projects."
      link="#"
    />
    <Card
      title="Deploy"
      description="Instantly deploy your Next.js site to a public URL with Vercel."
      link="#"
    />
  </Grid>
)

export const Default = Template.bind({})
