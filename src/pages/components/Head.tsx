import {
    Box, Flex, Text, Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { SiCss3, SiSass, SiChakraui, SiReact } from 'react-icons/si'
import { SiGithub, SiTwitter } from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Head() {

    const router = useRouter()

    return (
        <>
            <Flex
                w={'100%'}
                h={'10vh'}
                bg={'#fff'}
                marginLeft={{ lg: '25rem', sm: '2rem' }}
                justifyContent={'space-around'}
                alignItems={'center'}
                position={'fixed'}
                zIndex={'0'}
                top={0}>
                <Box display={{ sm: 'block', lg: 'none' }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon w={'2rem'} h={'2rem'} />}
                            variant='outline'
                            w={'3rem'}
                            h={'3rem'}
                            bgGradient={'linear(purple.200,blue.200)'}
                            _hover={{ bgGradient: 'linear(purple.200,blue.200)' }}
                        />
                        <MenuList>
                            <MenuItem icon={<SiReact />} onClick={() => router.push('/')}>
                                Top
                            </MenuItem>
                            <MenuItem icon={<SiCss3 />} onClick={() => router.push('/CSSpage')}>
                                CSS
                            </MenuItem>
                            <MenuItem icon={<SiSass />} onClick={() => router.push('/Sasspage')}>
                                Sass/Scss
                            </MenuItem>
                            <MenuItem icon={<SiChakraui />} onClick={() => router.push('/Chakra-UIpage')}>
                                Chakra-UI
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Text
                        as={'h2'}
                        fontSize={{ base: '2xl', lg: '8xl' }}
                        fontWeight={'bold'}>Styles in React</Text>
                </Box>
                <Flex paddingRight={{ base: '1rem', lg: '50rem' }} gap={'3rem'}>
                    <Link href={'https://github.com/RikutoOgaki/React-CSSpage'}>
                        <Text fontSize={{ base: '2rem', lg: '4rem' }}>
                            <SiGithub />
                        </Text>
                    </Link>
                    <Link href={'https://twitter.com/Rikuto_Ogaki'}>
                        <Text fontSize={{ base: '2rem', lg: '4rem' }}>
                            <SiTwitter />
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}