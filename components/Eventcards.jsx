import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'

function Eventcards() {
    return (
        <Flex m={[3, 5, 10]} >
            <Flex bgColor={'#eebbb9'}
                borderRadius={12} p={30}
                borderRight={'dashed'}
                borderColor={'#a8908f'}
                alignItems='center'>
                <Img src='favicon.ico' />
            </Flex>
            <Box p={25} bgColor={'#eebbb9'} borderRadius={12}
            >
                <Heading
                    fontSize={[18, 20, 25]}>Event Name</Heading>
                <Text
                    fontSize={[10, 20, 25]}
                >Event Name
                    Get into somthing somthing somthing sdjfhsd
                    ajsdlfkjdsfldksfj
                    22 July 2022</Text>
                <Text>ovihweihwegw</Text>
            </Box>
        </Flex>
    )
}   

export default Eventcards