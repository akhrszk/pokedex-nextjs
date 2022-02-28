import { GetStaticProps } from 'next'
import { NextPageWithLayout } from './_app'
import DefaultLayout from '../components/layouts/DefaultLayout'
import PokeTable from '../components/PokeTable'
import { getPokeDex } from '../lib/pokemonApi'
import { convertPokemonDto, Pokemon } from '../dto/Pokemon'

type Props = {
  pokemons: Pokemon[]
}

const Home: NextPageWithLayout<Props> = ({ pokemons }) => (
  <PokeTable style="grid" pokemons={pokemons} />
)

Home.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pokemons = await getPokeDex()
  return {
    props: {
      pokemons: pokemons.map(convertPokemonDto),
    },
  }
}

export default Home
