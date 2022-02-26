import { NextPageWithLayout } from '../_app'
import Layout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'

const PokemonIndex: NextPageWithLayout = () => (
  <div>ポケモンを選択してください。</div>
)

PokemonIndex.getLayout = page => (
  <Layout>
    <PokeDexLayout>{page}</PokeDexLayout>
  </Layout>
)

export default PokemonIndex
