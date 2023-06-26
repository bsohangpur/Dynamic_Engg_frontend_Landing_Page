import React, { Component } from "react";
import { Box, Heading, Flex, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TextAnimation } from "../utils";
import { motionBoxes } from "../data";
import { Link } from "react-router-dom";

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
          py={12}
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
                onClick={() => {
                  const section = document.getElementById("projects");
                  section.scrollIntoView({ behavior: "smooth" });
                }}
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
              {[
                { start: 0, end: 2 },
                { start: 2, end: 5 },
                { start: 5, end: 8 },
              ].map(({ start, end }, index) => (
                <Flex
                  key={start + end + index}
                  justifyContent="space-between"
                  gap={2}
                >
                  {motionBoxes.slice(start, end).map((box, index) => (
                    <MotionBox
                      key={box.bgImage + index}
                      initial={box.initial}
                      animate={box.animate}
                      transition={{ duration: 2 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                      className={box.className}
                      bgImage={box.bgImage}
                      bgPosition={box.bgPosition}
                      bgSize={box.bgSize}
                    />
                  ))}
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default Hero;
