import { Box, Flex, Text } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Header from './components/Head'
import Head from 'next/head'
import Sass from './components/Sasscontents'

export default function Sasspage() {
    return (
        <>
            <Head>
                <title>React CSS design</title>
            </Head>
            <Box position={'relative'} overflow={'hidden'}>
                <Header />
                <Navigation />
            </Box>
        </>
    )
}