import type { NextPage } from 'next'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'

import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guitao Liu</title>
      </Head>
      <VStack
        h="full"
        maxW={{ base: '70%', md: '60%' }}
        m="auto"
        pt={5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Navbar />
        <Profile />
        <Footer />
      </VStack>
    </>
  )
}

export default Home
