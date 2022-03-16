import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Image,
<<<<<<< HEAD
<<<<<<< Updated upstream
	SimpleGrid,
=======
>>>>>>> Stashed changes
=======
>>>>>>> parent of ec045c5 (Merge branch 'dev' of github.com:SvitPrakarsh/Prakarsh17 into dev)
	Text,
	VStack,
} from "@chakra-ui/react";
import HeroPatterns from "../components/HeroPatterns";
<<<<<<< HEAD
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const Home = () => {
	return (
<<<<<<< Updated upstream
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
=======
=======

const Home = () => {
	return (
>>>>>>> parent of ec045c5 (Merge branch 'dev' of github.com:SvitPrakarsh/Prakarsh17 into dev)
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
			<Container
				as={Flex}
				py="20"
				justifyContent="flex-start"
				maxW="container.xl"
				flexDir={["column", null, "row"]}
			>
				<VStack align="start">
					<Heading color="#042A2B">
						About{" "}
						<Text as="span" color="#D55954">
							Prakarsh
						</Text>
>>>>>>> Stashed changes
					</Heading>
					<Heading fontSize="10vw" color="brand.red">
						&rsquo;22
					</Heading>
				</Container>
				<HeroPatterns w="full" h="auto" fill="none" />
				<Container
					as={Flex}
					py="20"
					justifyContent="flex-start"
					maxW="container.xl"
					flexDir={["column", null, "row"]}
				>
					<VStack align="start">
						<Heading color="#042A2B">
							About{" "}
							<Text as="span" color="#D55954">
								Prakarsh
							</Text>
						</Heading>
						<Text fontSize="md">
							PRAKARSH, a National Level Technical Symposium to
							bring together the best brains in the country and
							give them a chance to showcase their skills and
							talents. This will give a platform for the students
							to interact and compete with each other. There are
							non-technical events too to incorporate fun
							activities alongside the technical fervour.
						</Text>
					</VStack>
				</Container>
			</Box>
			<Container maxW="container.xl">
				<SimpleGrid columns={[1, 2, 3]} spacing={5} pr={[10, 1, 0]}>
					<EventCard
						title="Event Name"
						description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
						image="https://picsum.photos/200"
					/>
				</SimpleGrid>
			</Container>
<<<<<<< Updated upstream
			<Footer></Footer>
		</>
=======
			<Container maxW="container.xl">
				<Flex justify="center">
					<Box
						bg="red.200"
						p="4"
						rounded="md"
						borderEndColor="red.800"
						borderEndWidth="2px"
						borderEndStyle="dashed"
					>
						<AspectRatio maxW="600px" ratio={3 / 4}>
							<Image
								src="https://picsum.photos/200"
								h="full"
								w="auto"
								objectFit="cover"
							/>
						</AspectRatio>
					</Box>
					<Box bg="red.200" p="4" rounded="md">
						adfk
					</Box>
				</Flex>
			</Container>
		</Box>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> parent of ec045c5 (Merge branch 'dev' of github.com:SvitPrakarsh/Prakarsh17 into dev)
	);
};

export default Home;
