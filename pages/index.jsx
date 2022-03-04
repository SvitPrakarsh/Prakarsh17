import { Box, Container, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Eventcards from "../components/Eventcards";
import HeroBackground from "../components/svgs/hero";
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {
    return (
        <>
            <Box backgroundColor="#F7F1EC" minHeight="100vh">
                <Container as={Flex} justifyContent="center" alignItems="center" py="15%">
                    <Heading fontSize="10vw" color="#042A2B">
                        Prakarsh{" "}
                    </Heading>
                    <Heading fontSize="10vw" color="#D55954">
                        &rsquo;22
                    </Heading>
                </Container>
                <HeroBackground />
                <Container py="20" justifyContent="flex-start" maxW="container.xl">
                    <VStack alignItems="flex-start" w="100%" textAlign={'justify'}>
                        <Heading color="#042A2B">
                            About{" "}
                            <Text as="span" color="#D55954">
                                Prakarsh
                            </Text>
                        </Heading>
                        <Text fontSize="md">
                            PRAKARSH, a National Level Technical Symposium to bring together the best brains in the country
                            and give them a chance to showcase their skills and talents. This will give a platform for the
                            students to interact and compete with each other. There are non-technical events too to
                            incorporate fun activities alongside the technical fervour.
                        </Text>
                    </VStack>
                </Container>
            </Box>
            {/* <Box bg={'grey'} h={2}></Box> */}
            <Grid templateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)']} gap={2} bg={'#F7F1EC'}>
                <Eventcards></Eventcards>
                <Eventcards></Eventcards>
                <Eventcards></Eventcards>
                <Eventcards></Eventcards>
                <Eventcards></Eventcards>
                <Eventcards></Eventcards>
            </Grid>

            
        </>
    );
}
