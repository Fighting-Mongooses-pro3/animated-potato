import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Page } from '../components'

const Home: NextPage = () => {
  return (
    <Page currentPage='Home' meta={{
      desc: "Create a new budget!"
    }}>
      
    </Page>
  )
}

export default Home
