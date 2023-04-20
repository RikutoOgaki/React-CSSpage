import { Box, Flex, Text } from '@chakra-ui/react'
import { SiGithub, SiTwitter } from 'react-icons/si'
import Link from 'next/link'

export default function Head() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'8vh'}
                marginLeft={'25rem'}
                justifyContent={'space-between'}
                alignItems={'center'}
                position={'fixed'}
                top={0}>
                <Box paddingLeft={{ base: '20rem', lg: '40rem' }}>
                    <Text as={'h2'} fontSize={'7xl'} fontWeight={'bold'}>Styles in React</Text>
                </Box>
                <Flex paddingRight={'50rem'} gap={'4rem'}>
                    <Link href={'/'}>
                        <Text fontSize={'5xl'}>
                            <SiGithub />
                        </Text>
                    </Link>
                    <Link href={'/'}>
                        <Text fontSize={'5xl'}>
                            <SiTwitter />
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}