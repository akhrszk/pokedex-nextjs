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
