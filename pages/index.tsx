import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />


    </div>
  )
}

export default Home
