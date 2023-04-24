import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Chakra() {

    const router = useRouter()

    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                paddingTop={'8vh'}
            >
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                >
                    <Box as='section'>
                        <Text fontSize={'7xl'}>React + Chakra-UIについて</Text>
                        <Text fontSize={'3xl'}>
                            まずそもそもChakra-UIとはなにか。<br />
                            Chakra-UIは
                            <Text
                                as='u'
                                cursor={'pointer'}
                                onClick={() => router.push('https://www.uxpin.com/studio/jp/blog-jp/ui-component-library/')}
                                _hover={{ color: 'purple' }}
                            >
                                UIコンポーネントライブラリ
                            </Text>
                            の一つで自分でCSSを書かなくてもスタイルを記述することができて、<br />
                            デザインに一貫性をもたせることができる。<br />
                        </Text>
                    </Box>
                    <Box as='section' w={'90rem'}>
                        <Text fontSize={'7xl'}>1 . Menu</Text>
                        <Box>

                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}