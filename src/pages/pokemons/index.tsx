import { GetStaticProps } from 'next'
import { NextPageWithLayout } from '../_app'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'
import { convertPokemonDto, Pokemon } from '../../dto/Pokemon'
import { getPokeDex } from '../../lib/pokemonApi'

type Props = {
  pokemons: Pokemon[]
}

const PokemonIndex: NextPageWithLayout<Props> = () => (
  <div>ポケモンを選択してください。</div>
)

PokemonIndex.getLayout = (page, { pokemons }) => (
  <DefaultLayout>
    <PokeDexLayout pokemons={pokemons}>{page}</PokeDexLayout>
  </DefaultLayout>
)

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getPokeDex()
  return {
    props: {
      pokemons: pokemons.map(convertPokemonDto),
    },
  }
}

export default PokemonIndex
