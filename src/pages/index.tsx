import { NextPageWithLayout } from './_app'
import Layout from '../components/layouts/DefaultLayout'
import PokeTable from '../components/PokeTable'
import useSWR from 'swr'

const Home: NextPageWithLayout = () => {
  const { data, error } = useSWR('/api/pokemons')
  if (error) {
    return <div>{error}</div>
  }
  return <PokeTable style="grid" pokemons={data || []} loading={false} />
}

Home.getLayout = page => <Layout>{page}</Layout>

export default Home
