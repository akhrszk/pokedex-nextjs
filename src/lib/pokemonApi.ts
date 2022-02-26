import axios from 'axios'
import { Pokemon, PokemonDetail } from '../domain/Pokemon'

const MAX_POKEMON_ID = 151

export const getPokeDex = async (): Promise<Pokemon[]> => {
  const { status, data } = await axios.get<Array<any>>(
    `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json`,
  )
  if (status !== 200) {
    return []
  }
  return data
    .filter(({ id }) => id <= MAX_POKEMON_ID)
    .map(({ id, name }) => new Pokemon(`${id}`, name.japanese))
}

const pokeApi = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
})
const LANG = `ja-Hrkt`

export const getPokemonDetail = async (
  id: string,
): Promise<PokemonDetail | undefined> => {
  if (Number(id) > MAX_POKEMON_ID) {
    return undefined
  }
  const { status, data } = await pokeApi.get(`/pokemon-species/${id}/`)
  if (status !== 200) {
    return undefined
  }
  const evolutionId = trimId(data['evolution_chain']['url'])
  const evolution =
    (evolutionId && (await getEvolutionChain(evolutionId))) || []
  return new PokemonDetail(
    `${data.id}`,
    (data.names as Array<any>).find(({ language }) => language.name === LANG)
      ?.name || ``,
    (data.genera as Array<any>).find(({ language }) => language.name === LANG)
      ?.genus || ``,
    (data['flavor_text_entries'] as Array<any>)
      .filter(({ language }) => language.name === LANG)
      .map(({ flavor_text, version }) => ({
        text: flavor_text,
        version: version.name,
      })),
    evolution,
  )
}

export const getEvolutionChain = async (id: string): Promise<Pokemon[][]> => {
  const { status, data } = await pokeApi.get(`/evolution-chain/${id}/`)
  if (status !== 200) {
    return []
  }
  const pokeDex = await getPokeDex()

  /**
   * ネストしたObjectをArrayに変換
   * ex.) { species: { name, url }, evolves_to: [{ species: { name, url } }, { species: { name, url } }] }
   * => [[{ id, name }], [{ id, name },{ id, name }]]
   */
  const format = (evolutions: any[]): Pokemon[][] => {
    const species = evolutions
      .map(({ species }) => trimId(species.url))
      .map(id => pokeDex.find(pokemon => pokemon.id === id))
      .filter((pokemon): pokemon is Pokemon => !!pokemon)
    let chain = [species]
    evolutions
      .filter(evolution => evolution['evolves_to'].length > 0)
      .forEach(evolution => {
        chain = [...chain, ...format(evolution['evolves_to'])]
      })
    return chain.filter(v => v.length > 0)
  }

  const { chain } = data
  const evolution = format([chain])
  return evolution
}

// urlから`id`を取り出す
// ex.) `https://pokeapi.co/api/v2/pokemon-species/6/` => `6`
const trimId = (url: string): string | undefined => {
  const matched = url.match(/(\d+)\/$/) ?? []
  return matched[1]
}
