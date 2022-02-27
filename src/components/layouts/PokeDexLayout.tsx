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
      <div className="shrink-0 p-2">
        <PokeTable pokemons={data ?? []} loading={loading} />
      </div>
      <div className="grow p-8">{children}</div>
    </div>
  )
}

export default PokeDexLayout
