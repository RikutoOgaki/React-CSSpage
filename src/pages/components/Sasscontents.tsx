import { Box, Flex, Text } from '@chakra-ui/react'

export default function Sass() {
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
                    margin={'0 3rem'}
                    padding={'2rem'}
                    gap={'10rem'}>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>React + Sass/Scssについて</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            Sass/ScssではCSSと同様にスタイルを当てることができる。<br />
                            Sass/Scssを普通のHTMLに導入する際にはgulpなどを使ってCSSにコンパイルしてスタイルを当てる。<br />
                            ReactではCSS同様importして、classNameをつけて使用することができる。
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
                                src="https://codesandbox.io/embed/optimistic-shape-34c0hr?fontsize=14&hidenavigation=1&theme=dark"
                                title="optimistic-shape-34c0hr"
                                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                            ></Box>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}