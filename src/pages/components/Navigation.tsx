import { Box, Flex, Text, List, OrderedList, ListItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <>
            <Box>
                <Flex
                    as='aside'
                >
                    <Link href={'/'}>

                    </Link>
                    <nav>
                        <OrderedList>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                            <ListItem></ListItem>
                        </OrderedList>
                    </nav>
                </Flex>
            </Box>
        </>
    )
}