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
                        <Text fontSize={'7xl'}>Reactでのスタイル</Text>
                        <Text fontSize={'3xl'}>このサイトにおとずれてくれてありがとうございます!<br />
                            このサイトでは、ReactまたはHTMLでスタイルを当てることを目的としたデザインページです。<br />
                            Reactを使い始める人やReactを使っている人がページを作る中でどのようにしてスタイルを当てて行くかを教え、<br />
                            HTMLでスタイルを当てるときこれはどのように実装すのだろうと悩んでいる人に<br />
                            完成に向けて補助していきます。<br />
                            一つのテーマ(Component)に沿ってCSS,Sass/Scss,Chakra-UIそれぞれでの書き方で書いています。<br />
                            作品としてはものは同じです。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>注意事項</Text>
                        <Text fontSize={'3xl'}>
                            今回のReactについてはnext.js version13を採用しています。<br />
                            versionや環境によって導入できないなどの不具合がある場合がございますので、ご了承ください。<br />
                            できる限り最新versionにできるよう日々更新いたしますので今後ともよろしくおねがいします。<br />
                            こちらのサイトは私自身がこのスタイルはよく使われるんじゃないか、こういうのがあれば良いんじゃないかと思ったものしか載せておりません。<br />
                            さらにスタイルの幅を広げたい方にはご自身で追求していただくようお願いします。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>ReactでのCSS</Text>
                        <Text fontSize={'3xl'}>
                            HTMLにスタイルを当てるように書くことが可能。<br />
                            ReactもHTMLと同様CSSファイルを読み込ませる必要がある。<br />
                            下記の内容を書くことで読み込みが完了する。
                        </Text>
                        <Box as='code' fontSize={'3xl'}>
                            import style from 'ファイルがある場所'
                        </Box>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            // border={'1px solid tomato'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>ReactでのSass/Scss</Text>
                        <Text fontSize={'3xl'}>
                            まず、ReactにSass/Scssの環境を導入する必要がある。<br />
                            導入したあと、CSSと同様に読み込ませる必要があるので、<br />
                            下記の内容をそれぞれ書くことで完了する。
                        </Text>
                        <Flex flexDir={'column'}>
                            <Box as='code' fontSize={'3xl'}>
                                npm i --save-dev sass or
                                yarn i --save-dev sass
                            </Box>
                            <Box as='code' fontSize={'3xl'}>
                                import style from 'ファイルがある場所'
                            </Box>
                        </Flex>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            // border={'1px solid tomato'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>ReactでのChakra-UI</Text>
                        <Text fontSize={'3xl'}>
                            まず、Chakra-UIの環境を導入する必要がある。<br />
                            HTMLのタグの中に直接CSSのプロパティを書くことが可能。<br />
                            Chakra-UI用の専用のタグが存在します。<br />
                            下記の内容を導入したいファイルの直下でターミナルで入力する。
                        </Text>
                        <Box as={'code'} fontSize={'3xl'}>
                            npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
                        </Box>
                        <Text fontSize={'3xl'}>
                            専用をタグを使用する場合には下記の内容をファイルに読み込ませる必要がある。
                        </Text>
                        <Box as={'code'} fontSize={'3xl'}>
                            import ｛専用タグ｝from '@chakra-ui/react'
                        </Box>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            // border={'1px solid tomato'}
                            borderRadius={'10px'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            color={'#fff'}
                            marginTop={'3rem'}
                            textAlign={'center'}>
                            <Link href={'/'}>
                                <Text fontWeight={'extrabold'} fontSize={'2xl'} padding={'.9rem'}>
                                    詳しくはこちらから
                                </Text>
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}