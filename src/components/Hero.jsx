import React, { Component } from "react";
import { Box, Heading, Flex, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TextAnimation } from "../utils";

const MotionBox = motion(Box);

class Hero extends Component {
  render() {
    return (
      <Container maxW="container.lg" minH="100vh">
        <Flex
          w="full"
          h="full"
          flexDir={{ base: "column", md: "row" }}
          gap={4}
          my={12}
          align="center"
          justify="center"
        >
          <Box width={{ base: "100%", md: "50%" }} height="100%">
            <Flex flexDir="column" h="100%" gap={8} justifyContent="center">
              <MotionBox
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, bounce: 0.4 }}
                whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
                ml={4}
                className="border cursor-pointer border-gray-950 py-4 px-8 rounded-full w-fit"
              >
                <Heading size="md" as="h4">
                  Driving Innovation in the Electric Era
                </Heading>
              </MotionBox>
              <Heading as="h1" size="3xl" className="text-gray-950 font-bold">
                <TextAnimation text="Energizing Dubai's Construction Industry" />
              </Heading>
              <Button
                ml={4}
                w={200}
                color="blue.300"
                bg="blue.900"
                borderRadius={20}
              >
                Explore More
              </Button>
            </Flex>
          </Box>
          <Box width={{ base: "100%", md: "50%" }}>
            <Box className="grid grid-rows-3 gap-4 w-full h-full place-content-center">
              <Flex justifyContent="space-between" gap={2}>
                <MotionBox
                  initial={{ opacity: 0, x: -100, y: -100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 2, bounce: 0.4 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-gray-500 w-64 md:w-80 h-32 md:h-40 rounded-full rounded-es rounded-se"
                  bgImage="url(https://img.freepik.com/free-photo/electric-machines-switches-isolated-white-close_169016-4109.jpg?w=826&t=st=1686911415~exp=1686912015~hmac=528352b2264b0309f65a8ab797696912b8b2b61353c3826cded28b0791deb604)"
                  bgPosition="center"
                  bgSize="100%"
                ></MotionBox>
                <MotionBox
                  initial={{ opacity: 0, x: 100, y: -100 }}
                  animate={{ opacity: 0.85, x: 0, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  transition={{ duration: 2 }}
                  className="bg-red-700 w-32 md:w-40 h-32 md:h-40 rounded-full rounded-br "
                ></MotionBox>
              </Flex>
              <Flex justifyContent="space-between" gap={2}>
                <MotionBox
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-gray-950 w-32 md:w-40 h-32 md:h-40 rounded-full rounded-tl"
                  bgImage="url(https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?w=900&t=st=1686912251~exp=1686912851~hmac=8aa594f5165cbd2abe01aeb633c324c0c85cc8ac0d70faa1433da060e91d60c7)"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="150%"
                ></MotionBox>
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  transition={{ duration: 4 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-green-700 w-32 md:w-40 h-32 md:h-40 "
                ></MotionBox>
                <MotionBox
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-gray-200 w-32 md:w-40 h-32 md:h-40 rounded-bl-[10rem] "
                  bgImage="url(https://img.freepik.com/premium-photo/transformer-isolated-white-background-3d-model_324757-4523.jpg?w=826)"
                  bgPosition="center"
                  bgSize="150%"
                  bgRepeat="no-repeat"
                ></MotionBox>
              </Flex>{" "}
              <Flex justifyContent="space-between" gap={2}>
                <MotionBox
                  initial={{ opacity: 0, x: -100, y: 100 }}
                  animate={{ opacity: 0.85, x: 0, y: 0 }}
                  transition={{ duration: 2 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-blue-700 w-32 md:w-40 h-32 md:h-40 rounded-full"
                ></MotionBox>
                <MotionBox
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 2 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-gray-200 w-64 md:w-80 h-32 md:h-40 rounded-full rounded-bl"
                  bgImage="url(https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80)"
                  bgPosition="center"
                  bgSize="100%"
                ></MotionBox>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default Hero;
