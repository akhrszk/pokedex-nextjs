import { NextPageWithLayout } from '../_app'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'

const PokemonIndex: NextPageWithLayout = () => (
  <div>ポケモンを選択してください。</div>
)

PokemonIndex.getLayout = page => (
  <DefaultLayout>
    <PokeDexLayout>{page}</PokeDexLayout>
  </DefaultLayout>
)

export default PokemonIndex
