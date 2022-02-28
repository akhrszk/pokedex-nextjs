import * as domain from '../domain'

export type Pokemon = {
  id: string
  name: string
  sprite: string
  thumbnail: string
  image: string
}

export type PokemonDetail = Pokemon & {
  genera: string
  flavorTextEntries: FlavorText[]
  evolution: Pokemon[][]
}

type FlavorText = {
  text: string
  version: string
}

export const convertPokemonDto = (pokemon: domain.Pokemon): Pokemon => {
  const { id, name, sprite, thumbnail, image } = pokemon
  return { id, name, sprite, thumbnail, image }
}

export const convertPokemonDetailDto = (
  pokemon: domain.PokemonDetail,
): PokemonDetail => {
  const { id, name, genera, flavorTextEntries, sprite, thumbnail, image } =
    pokemon
  const evolution = pokemon.evolution.map(pokemons =>
    pokemons.map(pokemon => convertPokemonDto(pokemon)),
  )
  return {
    id,
    name,
    genera,
    flavorTextEntries,
    evolution,
    sprite,
    thumbnail,
    image,
  }
}
