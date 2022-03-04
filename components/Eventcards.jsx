import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'

function Eventcards() {
    return (
        <Flex m={[3, 10, 15]} bg={'#F7F1EC'}>
            <Flex bgColor={'#eebbb9'}
                borderRadius={12}
                p={[15, 25, 30]}
                borderRight={'dashed'}
                borderColor={'#a8908f'}
                alignItems='center'>
                <Img src='favicon.ico'/>
            </Flex>
            <Box p={10} bgColor={'#eebbb9'} borderRadius={12}
            >
            <Heading
                fontSize={[18, 20, 25]}>Event Name</Heading>
            <Text
                fontSize={[10, 20, 25]}
            >Event Name:-<br />
                frugal Entrepenuarar</Text>
            <Text>
            </Text>
        </Box>
        </Flex >
    )
}

export default Eventcards