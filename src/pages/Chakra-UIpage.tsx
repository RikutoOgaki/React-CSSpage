import { Box, Flex, Text } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Header from './components/Head'
import Head from 'next/head'
import Chakra from './components/Chakra-UIcontents'


export default function Chakrapage() {
    return (
        <>
            <Head>
                <title>React CSS design</title>
            </Head>
            <Box position={'relative'} overflow={'hidden'}>
                <Header />
                <Navigation />
                <Chakra />
            </Box>
        </>
    )
}