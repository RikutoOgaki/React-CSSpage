import {
    Box,
    Flex,
    Text,
    List,
    OrderedList,
    ListItem,
    Button,
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
import Link from 'next/link'
import Image from 'next/image'
import { SiCss3, SiSass, SiChakraui, SiReact } from 'react-icons/si'
import { useRouter } from 'next/router'

export default function Navigation() {

    const router = useRouter()

    return (
        <>
            <Box display={{ base: 'none', lg: 'block' }}>
                <Flex
                    as='aside'
                    position={'fixed'} top={0} left={0}
                    flexDir={'column'}
                    h={'200rem'}
                    w={'25rem'}
                    bgGradient={'linear(purple.200,blue.200)'}
                >
                    <Link href={'/'}>
                        {/* <Image src={''} alt='' /> */}
                        <Flex
                            as={'h1'}
                            fontSize={'4xl'}
                            padding={'2rem 0 0 2rem'}
                            color={'#fff'}
                            lineHeight={1}
                            fontWeight={'extrabold'}>
                            <SiReact color='skyblue' />
                            ReactStyles
                        </Flex>
                    </Link>
                    <Box as='nav' marginTop={'1rem'} padding={'2rem'} >
                        <OrderedList display={'flex'} flexDir={'column'} gap={'2rem'}>
                            <ListItem
                                onClick={() => router.push('/CSSpage')}
                                display={'flex'}
                                fontSize={'4xl'}
                                w={'20rem'}
                                h={'4rem'}
                                bg={'#fff'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                borderRadius={'10px'}
                                fontWeight={'bold'}
                                cursor={'pointer'}
                                _hover={{ bg: 'purple.400', color: 'blue.100' }}
                            >
                                <SiCss3 />
                                <Text
                                    fontSize={'2xl'}
                                    marginLeft={'1rem'}>CSS</Text>
                            </ListItem>
                            <ListItem
                                onClick={() => router.push('/Sasspage')}
                                w={'20rem'}
                                h={'4rem'}
                                bg={'#fff'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                borderRadius={'10px'}
                                display={'flex'}
                                fontSize={'4xl'}
                                fontWeight={'bold'}
                                cursor={'pointer'}
                                _hover={{ bg: 'purple.400', color: 'blue.100' }}
                            >
                                <SiSass />
                                <Text fontSize={'2xl'} marginLeft={'1rem'}>Sass/Scss</Text>
                            </ListItem>
                            <ListItem
                                onClick={() => router.push('/Chakra-UIpage')}
                                w={'20rem'}
                                h={'4rem'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                borderRadius={'10px'}
                                display={'flex'}
                                bg={'#fff'}
                                fontWeight={'bold'}
                                cursor={'pointer'}
                                _hover={{ bg: 'purple.400', color: 'blue.100' }}
                                fontSize={'4xl'}>
                                <SiChakraui />
                                <Text fontSize={'2xl'} marginLeft={'1rem'}>Chakra-UI</Text>
                            </ListItem>
                        </OrderedList>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}