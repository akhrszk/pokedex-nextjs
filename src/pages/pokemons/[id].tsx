import { GetStaticPaths, GetStaticProps } from 'next'
import { NextPageWithLayout } from '../_app'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'
import HeroContainer from '../../components/HeroContainer'
import EvolutionChain from '../../components/EvolutionChain'
import SectionDivider from '../../components/SectionDivider'
import {
  Pokemon,
  PokemonDetail,
  convertPokemonDto,
  convertPokemonDetailDto,
} from '../../dto/Pokemon'
import { getPokeDex, getPokemonDetail } from '../../lib/pokemonApi'

type Props = {
  pokemons: Pokemon[]
  detail: PokemonDetail
}

const PokemonDetail: NextPageWithLayout<Props> = ({ detail }) => (
  <div className="flex flex-col gap-8">
    <HeroContainer pokemon={detail} />
    {detail.evolution.length > 1 && <SectionDivider>進化</SectionDivider>}
    {detail.evolution.length > 1 && (
      <EvolutionChain evolution={detail.evolution} />
    )}
  </div>
)

PokemonDetail.getLayout = (page, { pokemons }) => (
  <DefaultLayout>
    <PokeDexLayout pokemons={pokemons}>{page}</PokeDexLayout>
  </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemonId = params?.id as string
  const [pokemons, detail] = await Promise.all([
    getPokeDex(),
    getPokemonDetail(pokemonId),
  ])
  if (!detail) {
    return { notFound: true }
  }
  return {
    props: {
      pokemons: pokemons.map(convertPokemonDto),
      detail: convertPokemonDetailDto(detail),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: `blocking`,
  }
}

export default PokemonDetail
