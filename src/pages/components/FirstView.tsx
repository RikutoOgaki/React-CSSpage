import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function FirstView() {
    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={'25rem'}
                paddingTop={'8vh'}>
                <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    gap={'10rem'}
                    margin={'0 3rem'}
                    padding={'2rem'}>
                    <Box as='section'>
                        <Box>
                            <Text as={'h2'} fontSize={'6xl'}>Reactでのスタイル</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                このサイトにおとずれてくれてありがとうございます!<br />
                                このサイトでは、Reactでスタイルを当てることを目的としたデザインページです。<br />
                                Reactを使い始める人やReactを使っている人がページを作る中でどのようにしてスタイルを当てて行くかを教え、<br />
                                完成に向けて補助していきます。
                            </Text>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Box>
                            <Text as={'h2'} fontSize={'6xl'}>注意事項</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                今回のReactについてはnext.js version13を採用しています。<br />
                                versionや環境によって導入できないなどの不具合がある場合がございますので、ご了承ください。<br />
                                できる限り最新versionにできるよう日々更新いたしますので今後ともよろしくおねがいします。<br />
                                こちらのサイトは私自身がこのスタイルはよく使われるんじゃないか、こういうのがあれば良いんじゃないかと思ったものしか載せておりません。<br />
                                さらにスタイルの幅を広げたい方にはご自身で追求していただくようお願いします。
                            </Text>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Box>
                            <Text as={'h2'} fontSize={'6xl'}>ReactでのCSS</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                HTMLにスタイルを当てるように書くことが可能。<br />
                                ReactもHTMLと同様CSSファイルを読み込ませる必要があるので、<br />
                                <Box as='code'>
                                    import style from 'ファイルがある場所'
                                </Box><br />
                                を書くことで読み込みが完了する。
                            </Text>
                        </Box>
                        <Box
                            w={'15rem'}
                            h={'4rem'}
                            border={'1px solid tomato'}
                            borderRadius={'10px'}
                            textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'bold'} fontSize={'2xs'} padding={'1.2rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Box>
                            <Text as={'h2'} fontSize={'6xl'}>ReactでのSass/Scss</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                まず、ReactにSass/Scssの環境を導入する必要があるので、<br />
                                <Box as='code'>
                                    npm i --save-dev sass or
                                    yarn i --save-dev sass
                                </Box><br />
                                を書く必要がある。<br />
                                HTMLにスタイルを当てるように書くことが可能。<br />
                                ReactもHTMLと同様Scssファイルを読み込ませる必要があるので、<br />
                                <Box as='code'>
                                    import style from 'ファイルがある場所'
                                </Box><br />
                                を書くことで読み込みが完了する。
                            </Text>
                        </Box>
                        <Box w={'15rem'} h={'4rem'} border={'1px solid tomato'} borderRadius={'10px'} textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'bold'} fontSize={'2xs'} padding={'1.2rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Box>
                            <Text as={'h2'} fontSize={'6xl'}>ReactでのChakra-UI</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                HTMLのタグの中に直接CSSのプロパティを書くことが可能。<br />
                                Chakra-UI用の専用のタグが存在します。<br />
                                <Box as='code'>
                                    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
                                </Box><br />
                                を書く必要がある。<br />
                                <Box as='code'>
                                    import ｛専用タグ｝from '@chakra-ui/react'
                                </Box><br />
                                を書くことで読み込みが完了する。
                            </Text>
                        </Box>
                        <Box
                            w={'15rem'}
                            h={'4rem'}
                            border={'1px solid tomato'}
                            borderRadius={'10px'}
                            textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'bold'} fontSize={'2xs'} padding={'1.2rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex >
        </>
    )
}