import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export default function EventCard({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	category: string;
	image: string;
}) {
	return (
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
				<Heading fontSize={[18, 20, 25]}>{title}</Heading>
				<Text fontSize={[10, 20, 25]}>{description}</Text>
			</Box>
		</Flex>
	);
}
