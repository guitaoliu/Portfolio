import type { NextPage } from 'next'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'

import Profile from './components/Profile'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <VStack
      h="full"
      maxW="75%"
      m="auto"
      alignItems="center"
      justifyContent="space-between">
      <Head>
        <title>Guitao Liu</title>
      </Head>
      <div> </div>
      <Profile />
      <Footer />
    </VStack>
  )
}

export default Home
