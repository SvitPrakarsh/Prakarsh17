import {
    Box,
    Container,
    Flex,
    Heading,
    Grid,
    HStack,
    Text,
    VStack,
    Divider
} from "@chakra-ui/react";
import Eventcards from "../components/Eventcards";
import HeroBackground from "../components/svgs/hero";
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <>
            <Navigation />
            <Box backgroundColor="#F7F1EC" minHeight="100vh">
                <Container
                    as={Flex}
                    justifyContent="center"
                    alignItems="center"
                    py="15%"
                >
                    <Heading fontSize="10vw" color="#042A2B">
                        Prakarsh{" "}
                    </Heading>
                    <Heading fontSize="10vw" color="#D55954">
                        &rsquo;22
                    </Heading>
                </Container>
                <HeroBackground />
                <Container py="20" justifyContent="flex-start" maxW="container.xl">
                    <VStack alignItems="flex-start" w="50%">
                        <Heading color="#042A2B">
                            About{" "}
                            <Text as="span" color="#D55954">
                                Prakarsh
                            </Text>
                        </Heading>
                        <Text fontSize="md">
                            PRAKARSH, a National Level Technical Symposium to bring together
                            the best brains in the country and give them a chance to showcase
                            their skills and talents. This will give a platform for the
                            students to interact and compete with each other. There are
                            non-technical events too to incorporate fun activities alongside
                            the technical fervour.
                        </Text>
                    </VStack>
                </Container>
            </Box>
            <Divider orientation={"horizontal"} h='5' w='100%' bg={"#D7D6BB"}/>
               
               <Flex justifyContent={'center'} bg={'#F7F1EC'}><Heading>Events</Heading></Flex>
                
            <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)']} bg={'#F7F1EC'}>
            <Eventcards></Eventcards>
            <Eventcards></Eventcards>
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
