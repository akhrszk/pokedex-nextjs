import React from 'react'
import Image from 'next/image'
import FlavorText from './FlavorText'
import { PokemonDetail } from '../dto/Pokemon'

type Props = {
  pokemon: PokemonDetail
}

const Hero: React.FC<Props> = ({ pokemon }) => (
  <div className="flex gap-12">
    <Image
      alt={pokemon.name}
      src={pokemon.image}
      width={300}
      height={300}
      className="block"
    />
    <div className="flex flex-col justify-center">
      <h4>
        <PokemonId id={pokemon.id ?? `0`} />
      </h4>
      <h2 className="mb-4">{pokemon.name}</h2>
      <FlavorText text={pokemon.flavorTextEntries[0]?.text ?? ``} />
    </div>
  </div>
)

const PokemonId: React.FC<{ id: string }> = ({ id }) => (
  <span>No.{`00${id}`.slice(-3)}</span>
)

export default Hero
