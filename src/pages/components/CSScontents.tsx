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
                        <Box>
                            &lt;div&gt;<br />
                            &lt;ul className={'.ul'}&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;HOME&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS1&lt;/a&gt;<br />
                            &lt;ul&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS1-1&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS1-2&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS1-3&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;/ul&gt;<br />
                            &lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS2&lt;/a&gt;<br />
                            &lt;ul&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS2-1&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS2-2&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS2-3&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;/ul&gt;<br />
                            &lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS3&lt;/a&gt;<br />
                            &lt;ul&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS3-1&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS3-2&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS3-3&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;/ul&gt;<br />
                            &lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS4&lt;/a&gt;<br />
                            &lt;ul&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS4-1&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS4-2&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;li&gt;&lt;a href=&quot;&quot;&gt;CONTENTS4-3&lt;/a&gt;&lt;/li&gt;<br />
                            &lt;/ul&gt;<br />
                            &lt;/li&gt;<br />
                            &lt;/ul&gt;<br />
                            &lt;/div&gt;
                        </Box>
                    </Box>
                </Flex >
            </Flex >
        </>
    )
}