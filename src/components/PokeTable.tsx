import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '../dto/Pokemon'

type Props = {
  style?: 'list' | 'grid'
  pokemons: Pokemon[]
  loading: boolean
}

const PokeList: React.FC<Props> = ({ style = 'list', pokemons, loading }) => {
  if (loading) {
    return <div>loading...</div>
  }
  const styles = [
    'flex',
    ...(style === 'list'
      ? ['flex-col']
      : style === 'grid'
      ? ['flex-wrap']
      : []),
  ]
  return (
    <div className={styles.join(' ')}>
      {style === 'list' &&
        pokemons.map(pokemon => <Row key={pokemon.id} pokemon={pokemon} />)}
      {style === 'grid' &&
        pokemons.map(pokemon => <Item key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}

export default PokeList

export const Row: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const { id, name, sprite } = pokemon
  return (
    <div className="p-2">
      <Link href={`/pokemons/${id}`}>
        <a>
          <Image alt={name} src={sprite} width={30} height={30} />
          {name}
        </a>
      </Link>
    </div>
  )
}

export const Item: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const { id, name, thumbnail } = pokemon
  return (
    <div className="shrink-0 text-center w-24">
      <Link href={`/pokemons/${id}`}>
        <a>
          <Image alt={name} src={thumbnail} width={50} height={50} />
          <br />
          {name}
        </a>
      </Link>
    </div>
  )
}
