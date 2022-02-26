import React from 'react'
import useSWR from 'swr'
import PokeTable from '../PokeTable'

import { Pokemon } from '../../dto/Pokemon'

const PokeDexLayout: React.FC = ({ children }) => {
  const { data, error } = useSWR<Pokemon[]>('/api/pokemons')
  if (error) {
    return <div>{error}</div>
  }
  const loading = !data && !error
  return (
    <div className="flex">
      <PokeTable pokemons={data ?? []} loading={loading} />
      <div>{children}</div>
    </div>
  )
}

export default PokeDexLayout
