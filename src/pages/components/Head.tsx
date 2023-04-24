import { Box, Flex, Text } from '@chakra-ui/react'
import { SiGithub, SiTwitter } from 'react-icons/si'
import Link from 'next/link'

export default function Head() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'8vh'}
                bg={'#fff'}
                marginLeft={'25rem'}
                justifyContent={'space-between'}
                alignItems={'center'}
                position={'fixed'}
                top={0}>
                <Box paddingLeft={{ base: '10rem', lg: '20rem' }}>
                    <Text
                        as={'h2'}
                        fontSize={{ base: '4xl', lg: '7xl' }}
                        fontWeight={'bold'}>Styles in React</Text>
                </Box>
                <Flex paddingRight={{ base: '50rem', lg: '40rem' }} gap={'2rem'}>
                    <Link href={'https://github.com/RikutoOgaki/React-CSSpage'}>
                        <Text fontSize={'5xl'}>
                            <SiGithub />
                        </Text>
                    </Link>
                    <Link href={'https://twitter.com/Rikuto_Ogaki'}>
                        <Text fontSize={'5xl'}>
                            <SiTwitter />
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}