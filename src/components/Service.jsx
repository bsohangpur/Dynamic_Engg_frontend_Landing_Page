import React, { Component } from "react";
import {
  Box,
  Button,
  Image,
  Grid,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { service } from "../data";

const MotionBox = motion(Box);

export default class Service extends Component {
  render() {
    return (
      <Container maxW="container.xl" mt="10" mb="10">
        <Box className=" flex flex-col items-center justify-center">
          <Heading>Our Service</Heading>
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            mt="10"
          >
            {service.map((item, index) => (
              <MotionBox
                initial={item.initial}
                whileInView={{ scale: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 180 }}
                className=" relative rounded-md shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className=""
                  loading="lazy"
                />
                <MotionBox
                  initial={{ opacity: 0, rotateY: 180 }}
                  transition={{ duration: 1, delay: 0.5  }}
                  whileHover={{ opacity: 1,  }}
                  whileTap={{ opacity: 1 }}
                  className="absolute top-0 left-0 w-full h-full flex items-center p-4 text-blue-950 backdrop-blur-xl text-center justify-center"
                >
                  <Text>{item.text}</Text>
                </MotionBox>
              </MotionBox>
            ))}
          </Grid>
          <Box mt={12}>
            <Button size="lg" colorScheme="teal" variant="solid">
              Our Services
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
