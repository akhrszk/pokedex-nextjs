import '../../styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { ReactElement, ReactNode } from 'react'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  return (
    <SWRConfig value={{ fetcher }}>
      {getLayout(<Component {...pageProps} />)}
    </SWRConfig>
  )
}

export default MyApp
