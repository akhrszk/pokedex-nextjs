import { useRouter } from 'next/router'
import useSWR from 'swr'
import { NextPageWithLayout } from '../_app'
import Layout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'
import Hero from '../../components/Hero'
import FlavorText from '../../components/FlavorText'
import EvolutionChain from '../../components/EvolutionChain'
import { PokemonDetail as Pokemon } from '../../dto/Pokemon'

const PokemonDetail: NextPageWithLayout = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR<Pokemon>(`/api/pokemons/${id}`)
  if (!data && !error) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div className="flex flex-col gap-4">
      {data && <Hero pokemon={data} />}
      <h2>
        <PokemonId id={data?.id ?? `0`} />
        {` `}
        {data?.name}
      </h2>
      <FlavorText text={data?.flavorTextEntries[0]?.text ?? ``} />
      {(data?.evolution || []).length > 1 && (
        <h3 className="text-center">進化</h3>
      )}
      {(data?.evolution || []).length > 1 && (
        <EvolutionChain evolution={data?.evolution || []} />
      )}
    </div>
  )
}

const PokemonId: React.FC<{ id: string }> = ({ id }) => (
  <span>No.{`00${id}`.slice(-3)}</span>
)

PokemonDetail.getLayout = page => (
  <Layout>
    <PokeDexLayout>{page}</PokeDexLayout>
  </Layout>
)

export default PokemonDetail
