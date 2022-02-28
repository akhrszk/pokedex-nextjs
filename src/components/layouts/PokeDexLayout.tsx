import React from 'react'
import { GetStaticProps } from 'next'
import PokeTable from '../../components/PokeTable'
import { Pokemon } from '../../dto/Pokemon'
import { getPokeDex } from '../../lib/pokemonApi'

type Props = {
  pokemons: Pokemon[]
}

const PokeDexLayout: React.FC<Props> = ({ children, pokemons }) => (
  <div className="flex">
    <div className="shrink-0 p-2">
      <PokeTable style="list" pokemons={pokemons} />
    </div>
    <div className="grow p-8">{children}</div>
  </div>
)

export default PokeDexLayout

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getPokeDex()
  return {
    props: {
      pokemons: pokemons.map(({ id, name, sprite, thumbnail, image }) => ({
        id,
        name,
        sprite,
        thumbnail,
        image,
      })),
    },
  }
}
