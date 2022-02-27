import React, { useMemo } from 'react'
import Link from 'next/link'
import Hero from './Hero'
import { PokemonDetail } from '../dto/Pokemon'

type Props = {
  pokemon: PokemonDetail
}

const HeroContainer: React.FC<Props> = ({ pokemon }) => {
  const { prevId, nextId } = useMemo(
    () => ({
      prevId: Number(pokemon.id) > 1 ? Number(pokemon.id) - 1 : undefined,
      nextId: Number(pokemon.id) <= 151 ? Number(pokemon.id) + 1 : undefined,
    }),
    [pokemon],
  )
  return (
    <div className="flex justify-between items-center">
      <div className="shrink-0 w-8">
        {prevId && (
          <Link href={`/pokemons/${prevId}`}>
            <a className="block text-center text-2xl">{`<`}</a>
          </Link>
        )}
      </div>
      <div className="shrink-0">
        <Hero pokemon={pokemon} />
      </div>
      <div className="shrink-0 w-8">
        {nextId && (
          <Link href={`/pokemons/${nextId}`}>
            <a className="block text-center text-2xl">{`>`}</a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default HeroContainer
