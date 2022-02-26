import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '../dto/Pokemon'

type Props = {
  evolution: Pokemon[][]
}

const EvolutionChain: React.FC<Props> = ({ evolution }) => (
  <div className="flex gap-4">
    {evolution.map(pokemons =>
      pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <Link href={`/pokemons/${pokemon.id}`}>
            <a>
              <Image
                alt={pokemon.name}
                src={pokemon.image}
                width={150}
                height={150}
              />
              <div>{pokemon.name}</div>
            </a>
          </Link>
        </div>
      )),
    )}
  </div>
)

export default EvolutionChain
