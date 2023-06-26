import React, { Component } from "react";
import {
  Box,
  Text,
  Image,
  Container,
  Grid,
  GridItem,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export default class Project extends Component {
  render() {
    return (
      <Container id="projects" minH="100vh" pt={10} maxW="container.xl" centerContent>
        <Heading as="h2" size="lg">
          Our Achievement
        </Heading>
        <Divider w={24} />
        <Box mb={12} className=" flex flex-col items-center justify-center">
          <Grid
            my={12}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {projects.slice(0, this.props.homeSlice).map((project, index) => (
              <GridItem key={project.id + index} position="relative">
                <MotionBox
                  initial={{ scaleX: 0, scaleY: 0.5 }}
                  whileInView={{ scaleX: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Box>
                    <Image
                      objectFit="cover"
                      objectPosition="center"
                      w={400}
                      h={250}
                      src={project.image}
                      alt={project.name}
                      borderRadius="lg"
                    />
                  </Box>
                  <MotionBox
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.75 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full h-full bg-blue-500 absolute top-0 flex items-center justify-center"
                  >
                    <Text fontSize="2xl" color="white">
                      {project.name}
                    </Text>
                  </MotionBox>
                </MotionBox>
              </GridItem>
            ))}
          </Grid>
          <Box display={!this.props.isHome && "none"} mt={12}>
            <Button
              as={Link}
              to="/projects"
              size="lg"
              colorScheme="teal"
              variant="solid"
            >
              Explore Our All Projects
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
