import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PokemonDetail } from '../dto/Pokemon'

type Props = {
  pokemon: PokemonDetail
}

const Hero: React.FC<Props> = ({ pokemon }) => (
  <div className="flex justify-between">
    <div className="shrink-0">
      <Link href={`/pokemons/${Number(pokemon.id) - 1}`}>
        <a>{`<`}</a>
      </Link>
    </div>
    <div className="shrink-0">
      <Image alt={pokemon.name} src={pokemon.image} width={300} height={300} />
    </div>
    <div className="shrink-0">
      <Link href={`/pokemons/${Number(pokemon.id) + 1}`}>
        <a>{`>`}</a>
      </Link>
    </div>
  </div>
)

export default Hero
