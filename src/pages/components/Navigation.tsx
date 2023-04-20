import { Box, Flex, Text, List, OrderedList, ListItem, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
    return (
        <>
            <Box>
                <Flex
                    as='aside'
                    flexDir={'column'}
                >
                    <Link href={'/'}>
                        {/* <Image src={''} alt='' /> */}
                        <Text as={'h1'} fontSize={'4xl'} padding={'2rem 0 0 2rem'}>ReactCSS</Text>
                    </Link>
                    <Flex as='nav' marginTop={'1rem'} padding={'2rem'}>
                        <OrderedList>
                            <ListItem>
                                <Box>CSS</Box>
                            </ListItem>
                            <ListItem>
                                <Box>Sass/Scss</Box>
                            </ListItem>
                            <ListItem>
                                <Box>Chakra-UI</Box>
                            </ListItem>
                        </OrderedList>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}