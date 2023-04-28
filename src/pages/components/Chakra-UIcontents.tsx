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
                    margin={'0 '}
                    padding={'2rem'}
                >
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }}>React + Chakra-UIについて</Text>
                        <Text fontSize={{ base: '2xs', lg: '3xl' }}>
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
                            専用のタグやレスポンシブを効かせたページを作ることがとても楽にできます。<br />
                            BootstrapやTailwind cssなどもございますが、そちらとの比較は別ページで行います。<br />
                            随時更新していきますのでお待ち下さい。<br />
                            この記事見ても物足りない。わからないことなどございましたら、下記のリンクに飛んで自分で深ぼって見てください。
                        </Text>
                        <Box
                            w={'20rem'}
                            h={'4rem'}
                            bgGradient={'linear(blue.200,purple.200)'}
                            textAlign={'center'}
                            lineHeight={'2.2'}
                            cursor={'pointer'}
                            borderRadius={'10px'}
                            marginTop={'3rem'}
                            onClick={() => router.push('https://chakra-ui.com/getting-started')}
                        >
                            <Text fontSize={'3xl'} color={'#fff'} fontWeight={'extrabold'}>Chakra-UI公式ページ</Text>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }}>Chakra-UIのここがすごい！</Text>
                        <Box paddingTop={'3rem'}>
                            <Box marginBottom={'4rem'}>
                                <Text fontSize={{ base: '2xl', lg: '5xl' }} paddingBottom={'2rem'}>1 .  タグの中にCSSプロパティを書くことができる！</Text>
                                <Text fontSize={{ base: '2xs', lg: '3xl' }} marginLeft={'4rem'}>
                                    やはりタグだけでページを作ろうと思うと、限界がありしたいこともできません。<br />
                                    そこでChakra-UIはプロパティをあてたいタグの中に書くことができます。<br />
                                    下記のように書けばスタイルをあてることができます！
                                </Text>
                                <Box as='figure' margin={'2rem 0 0 4rem'}>
                                    <Box as='img' src='/img/propatyimg.png' alt='' maxH={'30rem'} />
                                </Box>
                            </Box>
                            <Box>
                                <Text fontSize={{ base: '2xl', lg: '5xl' }} paddingBottom={'2rem'}>2 . 他のタグを自分で任意のタグにできる！</Text>
                                <Text fontSize={{ base: '2xs', lg: '3xl' }} marginLeft={'4rem'}>
                                    Box,Flex,Textなどメインのタグが在る中で、HTMLのマークアップ正確にしようと思うと、<br />
                                    Chakra-UIの専用タグでは足りません。<br />
                                    そこで、タグの中に<Box as='code' color={'red.500'}>as</Box>と書き、<br />
                                    自分の変えたいタグに変えることができる。
                                </Text>
                                <Box as='figure' margin={'2rem 0 0 4rem'}>
                                    <Box as='img' src='/img/asimg.png' alt='' maxH={'30rem'} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={{ base: '4xl', lg: '7xl' }} fontWeight={'extrabold'}>Chakra-UIのタグ</Text>
                        <Box as='article' margin={{ base: '3rem 0', lg: '7rem 0' }}>
                            <Text fontSize={{ base: '3xl', lg: '7xl' }} marginBottom={{ base: '2rem', lg: '5rem' }}> 1 . ＜Box＞</Text>
                            <Text fontSize={{ base: '2xs', lg: '3xl' }} marginLeft={'4rem'}>
                                HTMLでいいうところの
                                <Box as='code' color={'red.500'}>
                                    ＜div＞
                                </Box>のようなもの。<br />
                                HTMLにコンパイルされる際には、＜div＞に変換されます。<br />
                                特によく使うタグの一つだと私は考えます。
                            </Text>
                            <Box as='figure' margin={'2rem 0 0 4rem'}>
                                <Box as='img' src='/img/fleximg.png' alt='' maxH={'30rem'} />
                            </Box>
                        </Box>
                        <Box as='article' margin={{ base: '3rem 0', lg: '7rem 0' }}>
                            <Text fontSize={{ base: '3xl', lg: '7xl' }} marginBottom={{ base: '2rem', lg: '5rem' }}>2 . ＜Flex＞</Text>
                            <Text fontSize={{ base: '2xs', lg: '3xl' }} marginLeft={'4rem'}>
                                こちらのタグも、
                                <Box as='code' color={'red.500'}>
                                    ＜div＞
                                </Box>のように使うことが可能です。<br />
                                HTMLにコンパイルされる際には＜div＞に変換されます。<br />
                                CSS、Sass/Scssを書いたことがある人はわかると思います。<br />
                                display:flex;でスタイルを当てることが多いです。<br />
                                なんとこのタグ１つでこのタグの中にある子要素はすべて横並びになるのです。<br />
                                なので中央揃えや、等間隔に開けるなどが簡単にできてしまうのです。<br />
                                このタグを私は一番使います。
                            </Text>
                            <Box as='figure' margin={'2rem 0 0 4rem'}>
                                <Box as='img' src='/img/boximg.png' alt='' maxH={'30rem'} />
                            </Box>
                        </Box>
                        <Box as='article' margin={{ base: '3rem 0', lg: '7rem 0' }}>
                            <Text fontSize={{ base: '3xl', lg: '7xl' }} marginBottom={{ base: '2rem', lg: '5rem' }}>3 . ＜Text＞</Text>
                            <Text fontSize={{ base: '2xs', lg: '3xl' }} marginLeft={'4rem'}>
                                テキストを扱いに使われ、
                                <Box as='code' color={'red.500'}>
                                    ＜p＞
                                </Box>のようなもの。<br />
                                HTMLにコンパイルされる際には、＜p＞に変換されます。<br />
                                HTMLのテキストに関連するタグはたくさんあるので、asを使って別のタグに変えながらやると<br />
                                HTMLの文法に沿って書くことができます。
                            </Text>
                            <Box as='figure' margin={'2rem 0 0 4rem'}>
                                <Box as='img' src='/img/textmap.png' alt='' maxH={'30rem'} />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}