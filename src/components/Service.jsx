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
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export default class Service extends Component {
  render() {
    return (
      <Container maxW="container.xl" py="10">
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
                key={item.title + index}
                initial={item.initial}
                whileInView={{ scale: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 180 }}
                whileTap={{ rotateY: 180 }}
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
                  transition={{ duration: 1, delay: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  whileTap={{ opacity: 1 }}
                  className="absolute top-0 left-0 w-full h-full flex items-center p-4 text-blue-950 backdrop-blur-xl text-center justify-center"
                >
                  <Text pr>{item.text}</Text>
                </MotionBox>
              </MotionBox>
            ))}
          </Grid>
          <Box display={!this.props.isHome && "none" } mt={12}>
            <Button as={Link} to='/services' size="lg" colorScheme="teal" variant="solid">
              Our Services
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
