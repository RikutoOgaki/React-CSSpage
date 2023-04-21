import { Box, Flex, Text } from '@chakra-ui/react'
import Drop from './parts/cssparts/sample01'


export default function CSS() {
    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={'25rem'}
                paddingTop={'8vh'}
            >
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                    margin={'0 3rem'}
                    padding={'2rem'}>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>React + CSSについて</Text>
                        <Text fontSize={'3xl'}>
                            普通のプレーンなCSSではHTML同様に当てることができる。<br />
                            なので多く語ることは正直ない。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>1 . Drop Down Menu</Text>
                        <Box marginTop={'10rem'} height={'25rem'}>
                            <Drop />
                        </Box>

                    </Box>
                </Flex>
            </Flex>
        </>
    )
}