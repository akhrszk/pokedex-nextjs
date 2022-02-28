import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title?: string
}

const DefaultLayout: React.FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title && `${title} | `}ポケモン図鑑</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <h1 className="mx-4 my-8">
        <Link href="/">
          <a>ポケモン図鑑</a>
        </Link>
      </h1>
    </header>
    <main>{children}</main>
  </>
)

export default DefaultLayout
