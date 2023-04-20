import { Box, Flex, Text } from '@chakra-ui/react'

export default function FirstView() {
    return (
        <>
            <Box bg={'skyblue'} marginLeft={'25rem'}>
                <Box>
                    <Box as='section'>
                        <Text as={'h3'}>ReactでのCSSの使い方</Text>
                    </Box>
                </Box>
            </Box >
        </>
    )
}