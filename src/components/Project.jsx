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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projects } from "../data";

const MotionBox = motion(Box);

export default class Project extends Component {
  render() {
    return (
      <Container minH="100vh" maxW="container.xl" centerContent>
        <Heading as="h2" size="lg">
          Our Achievement
        </Heading>
        <Divider w={24} />
        <Box>
          <Grid
            my={12}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {projects.map((project, index) => (
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
                      alt="Project Image"
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
        </Box>
      </Container>
    );
  }
}
