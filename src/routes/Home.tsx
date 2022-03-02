import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import HeroPatterns from "../components/HeroPatterns";

const Home = () => {
	return (
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
	);
};

export default Home;
