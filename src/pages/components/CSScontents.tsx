import { Box, Flex, Text } from '@chakra-ui/react'


export default function CSS() {
    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={'8vh'}
                marginLeft={{ base: '2rem', lg: '25rem' }}
            >
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                    margin={'0 3rem'}
                    padding={'2rem'}>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>React + CSSについて</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            普通のプレーンなCSSではHTML同様に当てることができる。<br />
                            なので多く語ることは正直ない。
                        </Text>
                    </Box>
                    <Box
                        as='section'>
                        <Text fontSize={{ base: '3xl', lg: '7xl' }} marginBottom={'4rem'}>1 . Drop Down Menu</Text>
                        <Box h={'50rem'}>
                            <Box
                                w={{ base: '30rem', lg: '100rem' }}
                                h={'50rem'}
                                margin={'0'}
                                as='iframe'
                                src="https://codesandbox.io/embed/xenodochial-sun-l6tcqo?fontsize=14&hidenavigation=1&theme=dark"
                                title="xenodochial-sun-l6tcqo"
                                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                            ></Box>
                        </Box>
                    </Box>
                    {/* <Box
                        as='section'
                        w={'90rem'}
                    >
                        <Text fontSize={'7xl'} marginBottom={'4rem'}>2 . Drop Down Menu</Text>
                        <Box w={'100%'} h={'50rem'}>
                            <Box as='iframe'></Box>
                        </Box>
                    </Box> */}
                </Flex >
            </Flex >
        </>
    )
}