import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PokeTable from './PokeTable'

export default {
  title: 'Components/PokeTable',
  component: PokeTable,
} as ComponentMeta<typeof PokeTable>

const Template: ComponentStory<typeof PokeTable> = args => (
  <PokeTable {...args} />
)

const json = `[{"id":"1","name":"フシギダネ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/001MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/001.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png"},{"id":"2","name":"フシギソウ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/002MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/002.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/002.png"},{"id":"3","name":"フシギバナ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/003MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/003.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/003.png"},{"id":"4","name":"ヒトカゲ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/004MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/004.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/004.png"},{"id":"5","name":"リザード","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/005MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/005.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/005.png"},{"id":"6","name":"リザードン","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/006MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/006.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/006.png"},{"id":"7","name":"ゼニガメ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/007MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/007.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/007.png"},{"id":"8","name":"カメール","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/008MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/008.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/008.png"},{"id":"9","name":"カメックス","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/009MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/009.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/009.png"},{"id":"10","name":"キャタピー","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/010MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/010.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/010.png"},{"id":"11","name":"トランセル","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/011MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/011.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/011.png"},{"id":"12","name":"バタフリー","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/012MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/012.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/012.png"}]`

export const Default = Template.bind({})
Default.args = {
  pokemons: JSON.parse(json) as any,
}

export const Grid = Template.bind({})
Grid.args = {
  style: 'grid',
  pokemons: JSON.parse(json) as any,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
