import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import HeroContainer from './HeroContainer'

export default {
  title: 'Components/HeroContainer',
  component: HeroContainer,
} as ComponentMeta<typeof HeroContainer>

const Template: ComponentStory<typeof HeroContainer> = args => (
  <HeroContainer {...args} />
)

const json = `{"id":"1","name":"フシギダネ","genera":"たねポケモン","flavorTextEntries":[{"text":"うまれたときから せなかに\\nふしぎな タネが うえてあって\\nからだと ともに そだつという。","version":"x"},{"text":"うまれてから しばらくの あいだは\\nせなかの タネから えいようを\\nもらって おおきく そだつ。","version":"y"},{"text":"ひなたで ひるねを する すがたを みかける。\\nたいようの ひかりを いっぱい あびることで\\nせなかの タネが おおきく そだつのだ。","version":"omega-ruby"},{"text":"ひなたで ひるねを する すがたを みかける。\\nたいようの ひかりを いっぱい あびることで\\nせなかの タネが おおきく そだつのだ。","version":"alpha-sapphire"},{"text":"なんにちだって なにも たべなくても\\nげんき！ せなかのタネに たくさん\\nえいようが あるから へいきだ！","version":"lets-go-pikachu"},{"text":"なんにちだって なにも たべなくても\\nげんき！ せなかのタネに たくさん\\nえいようが あるから へいきだ！","version":"lets-go-eevee"},{"text":"うまれたときから せなかに\\nしょくぶつの タネが あって\\nすこしずつ おおきく そだつ。","version":"sword"},{"text":"うまれて しばらくの あいだ\\nせなかの タネに つまった\\nえいようを とって そだつ。","version":"shield"}],"evolution":[[{"id":"1","name":"フシギダネ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/001MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/001.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png"}],[{"id":"2","name":"フシギソウ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/002MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/002.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/002.png"}],[{"id":"3","name":"フシギバナ","sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/003MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/003.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/003.png"}]],"sprite":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/001MS.png","thumbnail":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/001.png","image":"https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png"}`

export const Default = Template.bind({})
try {
  Default.args = {
    pokemon: JSON.parse(json),
  }
} catch (e) {
  console.log(e)
}
