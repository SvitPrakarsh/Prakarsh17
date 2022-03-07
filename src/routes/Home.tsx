import { Box, Container, Flex, Heading, Text, VStack,Grid} from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import HeroPatterns from "../components/HeroPatterns";
import Eventcards from "../components/Eventcards";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
		<Navigation></Navigation>
		<Box minHeight="100vh">
			<Container
				as={Flex}
				justifyContent="center"
				alignItems="center"
				py="15%"
			>
				<Heading fontSize="10vw" color="brand.navy">
					Prakarsh{" "}
				</Heading>
				<Heading fontSize="10vw" color="brand.red">
					&rsquo;22
				</Heading>
			</Container>
			<HeroPatterns w="full" h="auto" fill="none" />
			<Container py="20" justifyContent="flex-start" maxW="container.xl">
				<VStack alignItems="flex-start" w="50%">
					<Heading color="#042A2B">
						About{" "}
						<Text as="span" color="#D55954">
							Prakarsh
						</Text>
					</Heading>
					<Text fontSize="md">
						PRAKARSH, a National Level Technical Symposium to bring
						together the best brains in the country and give them a
						chance to showcase their skills and talents. This will
						give a platform for the students to interact and compete
						with each other. There are non-technical events too to
						incorporate fun activities alongside the technical
						fervour.
					</Text>
				</VStack>
			</Container>
		</Box>
		<SimpleGrid columns={[1,2,3]} spacing={5} pr={[10,1,0]}>
		<Eventcards></Eventcards>
		<Eventcards></Eventcards>
		<Eventcards></Eventcards>
		<Eventcards></Eventcards>
		<Eventcards></Eventcards>
		</SimpleGrid>
		<Footer></Footer>
		</>
	);
};

export default Home;
