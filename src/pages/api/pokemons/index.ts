import type { NextApiRequest, NextApiResponse } from 'next'
import { getPokeDex } from '../../../lib/pokemonApi'
import { Pokemon } from '../../../dto/Pokemon'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>,
) {
  const pokemons = await getPokeDex()
  res.json(
    pokemons.map(({ id, name, sprite, thumbnail, image }) => ({
      id,
      name,
      sprite,
      thumbnail,
      image,
    })),
  )
}
