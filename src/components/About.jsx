import React, { Component } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default class About extends Component {
  render() {
    return (
      <Container maxW="container.lg">
        <Box className=" relative" minH="100vh">
          <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 0.3, duration: 1.5 },
              }}
              bgImage={`url(https://img.freepik.com/premium-photo/turn-tungsten-light-bulb-realistic-photo-image_45716-10.jpg?size=626&ext=jpg&uid=R99072542&semt=ais)`}
              bgPosition='center'
              bgRepeat='no-repeat'
              bgSize='cover'
              className=" absolute bottom-12 left-4 h-52 w-32 md:h-96 md:w-64 bg-slate-200  rounded-tl-[40px] rounded-br-[40px]"
            ></MotionBox>
            <Box className="z-10 flex flex-col justify-center items-center w-full h-screen text-center">
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1 },
                }}
              >
                <Heading
                  fontFamily="Open Sans, sans-serif"
                  as="h2"
                  size={{ base: "2xl", md: "4xl" }}
                  textTransform="capitalize"
                  lineHeight={1.4}
                >
                  Unveiling our engineering <br />
                  excellence
                </Heading>
              </MotionBox>
              <Box className=" flex flex-col items-start">
                <motion.p
                  initial={{ opacity: 0, x: 10, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { delay: 0.2, duration: 1.5 },
                  }}
                  className="w-56 md:w-80 mt-12 text-left"
                >
                  We are a team of passionate engineers who believe in the power
                  of technology to create the best possible user experience.
                </motion.p>
                <MotionButton
                  initial={{
                    scale: 0,
                    y: 100,
                    animation: { scale: 1, y: 0, transition: { duration: 1 } },
                  }}
                  whileInView={{
                    scale: 1,
                    y: 0,
                    transition: { duration: 1, bounce: 0.3 },
                  }}
                  viewport={{ once: true}}
                  whileHover={{}}
                  borderRadius="10px 0px 10px 0px"
                  size={{ base: "sm", md: "lg" }}
                  rightIcon={<FaArrowRight />}
                  className="mt-12"
                  bg="blue.900"
                  color="blue.100"
                  _hover={{ bg: "blue.600", color: "blue.200" }}
                >
                  Learn More
                </MotionButton>
              </Box>
            </Box>
            <MotionBox
              initial={{ opacity: 0, x: 100, y: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 1.5 },
              }}
              
              className=" absolute top-12 right-4 h-32 w-48 md:h-48 md:w-64 bg-yellow-100  rounded-tr-[40px] rounded-bl-[40px]"
            ></MotionBox>
          </Flex>
        </Box>
      </Container>
    );
  }
}
