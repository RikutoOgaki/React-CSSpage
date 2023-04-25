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
                            専用のタグやレスポンシブを効かせたページを作ることがとても楽にできます。<br />
                            BootstrapやTailwind cssなどもございますが、そちらとの比較は別ページで行います。<br />
                            随時更新していきますのでお待ち下さい。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'}>Chakra-UIのここがすごい！</Text>
                        <Box paddingTop={'3rem'}>
                            <Text fontSize={'5xl'} paddingBottom={'2rem'}>1 .  タグの中にCSSプロパティを書くことができる！</Text>
                            <Text fontSize={'3xl'}>
                                やはりタグだけでページを作ろうと思うと、限界がありしたいこともできません。<br />
                                そこでChakra-UIはプロパティをあてたいタグの中に書くことができます。<br />
                                下記のように書けばスタイルをあてることができます！
                            </Text>
                            <Box
                                as='iframe'
                            ></Box>
                        </Box>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'} marginBottom={'2rem'}> 1 . ＜Box＞</Text>
                        <Text fontSize={'3xl'}>
                            HTMLでいいうところの
                            <Box as='code' color={'red.500'}>
                                ＜div＞
                            </Box>のようなもの。<br />
                            特によく使うタグの一つだと私は考えます。
                        </Text>
                    </Box>
                    <Box as='section'>
                        <Text fontSize={'7xl'} marginBottom={'2rem'}>2 . ＜Flex＞</Text>
                        <Text fontSize={'3xl'}>
                            こちらのタグも、
                            <Box as='code' color={'red.500'}>
                                ＜div＞
                            </Box>のように使うことが可能です。<br />
                            CSS、Sass/Scssを書いたことがある人はわかると思います。<br />
                            display:flex;でスタイルを当てることが多いです。<br />
                            なんとこのタグ１つでこのタグの中にある子要素はすべて横並びになるのです。<br />
                            なので中央揃えや、等間隔に開けるなどが簡単にできてしまうのです。<br />
                            このタグを私は一番使います。
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}