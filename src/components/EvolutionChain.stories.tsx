import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EvolutionChain from './EvolutionChain'

export default {
  title: 'Components/EvolutionChain',
  component: EvolutionChain,
} as ComponentMeta<typeof EvolutionChain>

const Template: ComponentStory<typeof EvolutionChain> = args => (
  <EvolutionChain {...args} />
)

const json = `[[{"id":"1","name":"フシギダネ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/001MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/001.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png"}],[{"id":"2","name":"フシギソウ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/002MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/002.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/002.png"}],[{"id":"3","name":"フシギバナ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/003MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/003.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/003.png"}]]`

export const Default = Template.bind({})
Default.args = {
  evolution: JSON.parse(json) as any,
}
