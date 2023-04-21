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
                        <Box
                            w={'100vh'}
                            h={'100rem'}
                            as='iframe'
                            src='https://codesandbox.io/s/xenodochial-sun-l6tcqo'
                            title="distracted-cori-x6d0s"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        >
                        </Box>
                    </Box>
                </Flex >
            </Flex >
        </>
    )
}