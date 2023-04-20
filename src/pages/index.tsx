import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'


export default function Home() {
  return (
    <>
      <Head>
        <title>React CSS design</title>
      </Head>
      <Box>
        <Box>
          <Navigation />
        </Box>
      </Box>

    </>
  )
}