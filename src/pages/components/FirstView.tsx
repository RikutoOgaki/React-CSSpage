import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function FirstView() {

    const router = useRouter()

    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={{ base: '25rem', sx: '2rem' }}
                paddingTop={'8vh'}>
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                    margin={'0 3rem'}
                    padding={'2rem'}>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>Reactでのスタイル</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            このサイトにおとずれてくれてありがとうございます!<br />
                            このサイトでは、ReactまたはHTMLでスタイルを当てることを目的としたデザインページです。<br />
                            Reactを使い始める人やReactを使っている人がページを作る中でどのようにしてスタイルを当てて行くかを教え、<br />
                            HTMLでスタイルを当てるときこれはどのように実装するのだろうと悩んでいる人に<br />
                            完成を向けて補助していきます。<br />
                            一つのテーマ(Component)に沿ってCSS,Sass/Scssそれぞれでの書き方で書いています。<br />
                            作品としてはものは同じです。<br />
                            Chakra-UIの方では書き方をメインに載せていきます。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>注意事項</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            今回のReactについてはnext.js version13を採用しています。<br />
                            versionや環境によって導入できないなどの不具合がある場合がございますので、ご了承ください。<br />
                            できる限り最新versionにできるよう日々更新いたしますので今後ともよろしくおねがいします。<br />
                            こちらのサイトは私自身がこのスタイルはよく使われるんじゃないか、こういうのがあれば良いんじゃないかと思ったものしか載せておりません。<br />
                            さらにスタイルの幅を広げたい方にはご自身で追求していただくようお願いします。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>ReactでのCSS</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            HTMLにスタイルを当てるように書くことが可能。<br />
                            ReactもHTMLと同様CSSファイルを読み込ませる必要がある。<br />
                            下記の内容を書くことで読み込みが完了する。
                        </Text>
                        <Box as='code' fontSize={{ base: '2xl', lg: '3xl' }}>
                            import style from 'ファイル名'
                        </Box>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}
                            cursor={'pointer'}
                            onClick={() => router.push('/CSSpage')}
                        >
                            <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                詳しくはこちらから
                            </Text>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>ReactでのSass/Scss</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            まず、ReactにSass/Scssの環境を導入する必要がある。<br />
                            導入したあと、CSSと同様に読み込ませる必要があるので、<br />
                            下記の内容をそれぞれ書くことで完了する。
                        </Text>
                        <Flex flexDir={'column'}>
                            <Box as='code' fontSize={{ base: '2xl', lg: '3xl' }}>
                                npm i --save-dev sass or
                                yarn i --save-dev sass
                            </Box>
                            <Box as='code' fontSize={{ base: '2xl', lg: '3xl' }}>
                                import style from 'ファイルがある場所'
                            </Box>
                        </Flex>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}
                            cursor={'pointer'}
                            onClick={() => router.push('/Sasspage')}
                        >
                            <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                詳しくはこちらから
                            </Text>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>ReactでのChakra-UI</Text>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            まず、Chakra-UIの環境を導入する必要がある。<br />
                            HTMLのタグの中に直接CSSのプロパティを書くことが可能。<br />
                            Chakra-UI用の専用のタグが存在します。<br />
                            下記の内容を導入したいファイルの直下でターミナルで入力する。
                        </Text>
                        <Box as={'code'} fontSize={{ base: '2xl', lg: '3xl' }}>
                            npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
                        </Box>
                        <Text fontSize={{ base: '2xl', lg: '3xl' }}>
                            専用をタグを使用する場合には下記の内容をファイルに読み込ませる必要がある。
                        </Text>
                        <Box as={'code'} fontSize={{ base: '2xl', lg: '3xl' }}>
                            import ｛専用タグ｝from '@chakra-ui/react'
                        </Box>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}
                            cursor={'pointer'}
                            onClick={() => router.push('/Chakra-UIpage')}
                        >
                            <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                詳しくはこちらから
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}