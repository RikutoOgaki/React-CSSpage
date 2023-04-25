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
                h={'8vh'}
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
                        />
                        <MenuList>
                            <MenuItem icon={<SiCss3 />} onClick={() => router.push('/CSSpage')}>
                                CSS
                            </MenuItem>
                            <MenuItem icon={<SiSass />}>
                                Sass/Scss
                            </MenuItem>
                            <MenuItem icon={<SiChakraui />}>
                                Chakra-UI
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Text
                        as={'h2'}
                        fontSize={{ base: '2xl', lg: '7xl' }}
                        fontWeight={'bold'}>Styles in React</Text>
                </Box>
                <Flex paddingRight={{ base: '1rem', lg: '50rem' }} gap={'2rem'}>
                    <Link href={'https://github.com/RikutoOgaki/React-CSSpage'}>
                        <Text fontSize={{ sm: '2rem', lg: '4rem' }}>
                            <SiGithub />
                        </Text>
                    </Link>
                    <Link href={'https://twitter.com/Rikuto_Ogaki'}>
                        <Text fontSize={{ sm: '2rem', lg: '4rem' }}>
                            <SiTwitter />
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}