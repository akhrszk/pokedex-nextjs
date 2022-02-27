import { useRouter } from 'next/router'
import useSWR from 'swr'
import { NextPageWithLayout } from '../_app'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import PokeDexLayout from '../../components/layouts/PokeDexLayout'
import HeroContainer from '../../components/HeroContainer'
import EvolutionChain from '../../components/EvolutionChain'
import SectionDivider from '../../components/SectionDivider'
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
    <div className="flex flex-col gap-8">
      {data && <HeroContainer pokemon={data} />}
      {(data?.evolution || []).length > 1 && (
        <SectionDivider>進化</SectionDivider>
      )}
      {(data?.evolution || []).length > 1 && (
        <EvolutionChain evolution={data?.evolution || []} />
      )}
    </div>
  )
}

PokemonDetail.getLayout = page => (
  <DefaultLayout>
    <PokeDexLayout>{page}</PokeDexLayout>
  </DefaultLayout>
)

export default PokemonDetail
