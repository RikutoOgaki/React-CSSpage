import { Box, Flex, Text, List, OrderedList, ListItem, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { SiCss3, SiSass, SiChakraui } from 'react-icons/si'

export default function Navigation() {
    return (
        <>
            <Box>
                <Flex
                    as='aside'
                    position={'fixed'} top={0} left={0}
                    flexDir={'column'}
                    h={'200rem'}
                    bg={'#999'}
                >
                    <Link href={'/'}>
                        {/* <Image src={''} alt='' /> */}
                        <Text as={'h1'} fontSize={'4xl'} padding={'2rem 0 0 2rem'} color={'#fff'} fontWeight={'extrabold'}>ReactCSS</Text>
                    </Link>
                    <Box as='nav' marginTop={'1rem'} padding={'2rem'} >
                        <OrderedList display={'flex'} flexDir={'column'} gap={'2rem'}>
                            <Link href={'/'}>
                                <ListItem
                                    display={'flex'}
                                    fontSize={'4xl'}
                                    w={'20rem'}
                                    h={'4rem'}
                                    bg={'#fff'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={'1px solid #333'}
                                    borderRadius={'10px'}
                                >
                                    <SiCss3 />
                                    <Text fontSize={'2xl'} marginLeft={'1rem'}>CSS</Text>
                                </ListItem>
                            </Link>
                            <Link href={'/'}>
                                <ListItem
                                    w={'20rem'}
                                    h={'4rem'}
                                    bg={'#fff'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={'1px solid #333'}
                                    borderRadius={'10px'}
                                    display={'flex'}
                                    fontSize={'4xl'}>
                                    <SiSass />
                                    <Text fontSize={'2xl'} marginLeft={'1rem'}>Sass/Scss</Text>
                                </ListItem>
                            </Link>
                            <Link href={'/'}>
                                <ListItem
                                    w={'20rem'}
                                    h={'4rem'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    border={'1px solid #333'}
                                    borderRadius={'10px'}
                                    display={'flex'}
                                    bg={'#fff'}
                                    fontSize={'4xl'}>
                                    <SiChakraui />
                                    <Text fontSize={'2xl'} marginLeft={'1rem'}>Chakra-UI</Text>
                                </ListItem>
                            </Link>
                        </OrderedList>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}