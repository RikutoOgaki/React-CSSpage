import { Box, Flex, Text } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Header from './components/Head'
import Head from 'next/head'
import CSS from './components/CSScontents'



export default function CSSpage() {
    return (
        <>
            <Head>
                <title>React CSS design</title>
            </Head>
            <Box position={'relative'} overflow={'hidden'}>
                <Header />
                <Navigation />
                <CSS />
            </Box>
        </>
    )
}