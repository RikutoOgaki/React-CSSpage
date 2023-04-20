import { Box, Flex, Text, Grid } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import FirstView from './FirstView'
import Header from './components/Head'


export default function Home() {
  return (
    <>
      <Head>
        <title>React CSS design</title>
      </Head>
      <Box position={'relative'} overflow={'hidden'}>
        <Header />
        <Navigation />
        <FirstView />
      </Box>

    </>
  )
}