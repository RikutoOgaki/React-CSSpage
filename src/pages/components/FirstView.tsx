import { Box, Flex, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'

export default function FirstView() {
    return (
        <>
            <Box bg={'skyblue'} marginLeft={'25rem'} paddingTop={'8vh'}>
                <Box margin={'0 3rem'} padding={'2rem'}>
                    <Box as='section'>
                        <Text
                            as={'h3'}
                            fontSize={'5xl'}
                        >ReactでのCSSの使い方</Text>
                        <Box as='pre' bg={'#fff'}>
                            <Box as='code'>
                                <Text>

                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}