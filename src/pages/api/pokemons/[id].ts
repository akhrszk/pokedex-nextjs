import type { NextApiRequest, NextApiResponse } from 'next'
import { getPokemonDetail } from '../../../lib/pokemonApi'
import { PokemonDetail } from '../../../dto/Pokemon'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonDetail | string>,
) {
  const { id: pokemonId } = req.query
  if (typeof pokemonId !== 'string') {
    return res.status(400).send(`Bad Request`)
  }
  const detail = await getPokemonDetail(pokemonId)
  if (!detail) {
    return res.status(404).send(`Not Found`)
  }
  const { id, name, genera, flavorTextEntries, sprite, thumbnail, image } =
    detail
  const evolution = detail.evolution.map(pokemons =>
    pokemons.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprite,
      thumbnail: pokemon.thumbnail,
      image: pokemon.image,
    })),
  )
  res.json({
    id,
    name,
    genera,
    flavorTextEntries,
    evolution,
    sprite,
    thumbnail,
    image,
  })
}
