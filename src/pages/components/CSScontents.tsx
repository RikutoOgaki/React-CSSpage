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
            // bg={'tomato'}
            >
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                    margin={'0 3rem'}
                    padding={'2rem'}>
                    <Box as='section'>
                        <Box>
                            <Text>React + CSSについて</Text>
                        </Box>
                        <Box>
                            <Text></Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Text>Drop Down Menu</Text>
                        </Box>
                        <Box height={'25rem'}>
                            <Drop />
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}