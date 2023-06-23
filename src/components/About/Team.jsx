import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const members = [
  {
    name: "John Doe",
    title: "CEO",
    image: "https://picsum.photos/200",
    initial: {
      opacity: 0,
      x: -100,
      y: -100,
      z: 20,
    },
  },
  {
    name: "Jane Smith",
    title: "CTO",
    image: "https://picsum.photos/200",
    initial: {
      opacity: 0,
      scale: 0,
      z: 20,
    },
  },
  {
    name: "Bob Johnson",
    title: "COO",
    image: "https://picsum.photos/200",
    initial: {
      opacity: 0,
      x: 100,
      y: 100,
      z: -20,
    },
  },
];

const TeamMember = ({ name, title, image, initial }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        transition: { duration: 1, delay: 0.5, bounce: 0.3 },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
      style={{ cursor: "pointer" }}
      className=" w-fit h-fit"
    >
      <Flex direction="column" alignItems="center">
        <Image src={image} alt={name} borderRadius="full" boxSize="150px" />
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="lg">{title}</Text>
        </Box>
      </Flex>
    </motion.div>
  );
};

const Team = () => {
  return (
    <Container overflowX="hidden" maxW="container.xl" pt={10}>
      <Box py={12}>
        <Heading textAlign="center" mb={10}>
          Meet Our Team
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} placeItems="center" spacing={2}>
          {members.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Team;
