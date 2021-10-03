import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LeetCodeTable from '../components/Leetcode'

import { getLeetCodeSolutions, LeetCodeSolution } from '../lib/notion'

type LeetCodeProps = {
  solutions: LeetCodeSolution[]
}

const LeetCode = (props: LeetCodeProps) => {
  const { solutions } = props
  return (
    <>
      <Head>
        <title>LeetCode Solutions</title>
      </Head>
      <VStack
        h="full"
        maxW={{ base: '70%', md: '60%' }}
        m="auto"
        pt={5}
        alignItems="center"
        spacing={15}
      >
        <Navbar />
        <LeetCodeTable solutions={solutions} />
        <Footer />
      </VStack>
    </>
  )
}

export default LeetCode

export async function getStaticProps() {
  const solutions = await getLeetCodeSolutions()
  return {
    props: {
      solutions,
    },
  }
}
