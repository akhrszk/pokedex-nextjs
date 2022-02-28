import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '../dto/Pokemon'

type Props = {
  style?: 'list' | 'grid'
  pokemons: Pokemon[]
  loading?: boolean
}

const PokeList: React.FC<Props> = ({
  style = 'list',
  pokemons = [],
  loading = false,
}) => {
  if (loading) {
    return <div>loading...</div>
  }
  const styles = [
    'flex',
    ...(style === 'list'
      ? ['flex-col', 'gap-2']
      : style === 'grid'
      ? ['flex-wrap', 'gap-4']
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
    <div>
      <Link href={`/pokemons/${id}`} prefetch={false}>
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
    <div className="shrink-0">
      <Link href={`/pokemons/${id}`} prefetch={false}>
        <a>
          <Image alt={name} src={thumbnail} width={100} height={100} />
          <br />
          <div className="text-center">{name}</div>
        </a>
      </Link>
    </div>
  )
}
