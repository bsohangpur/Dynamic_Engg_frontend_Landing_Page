import React, { Component } from "react";
import { Box, Text, Flex, Image, Container, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Saudi_German_Hospital } from "../assets";

const MotionBox = motion(Box);

class Point extends Component {
  render() {
    return (
      <Flex alignItems="center" my={4} gap={6}>
        <MotionBox
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" border-2 w-24 h-24 flex justify-center items-center"
        >
          <span className="text-4xl font-extrabold">{this.props.id}</span>
        </MotionBox>
        <MotionBox
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text className=" font-bold text-2xl">{this.props.title}</Text>
          <Divider w={24} className="my-1" />
          <Text className="text-sm">{this.props.text}</Text>
        </MotionBox>
      </Flex>
    );
  }
}

const points = [
  {
    id: 1,
    title: "Technology Partners",
    text: "We partner with the best tech companies to build the best products.",
  },
  {
    id: 2,
    title: "Customer Support",
    text: "We have the best developers in the industry.",
  },
  {
    id: 3,
    title: "Cost Effective",
    text: "We pay the most for our services.",
  },
];

export default class WhyChooseUS extends Component {
  render() {
    return (
      <Container maxW="container.xl" py="10">
        <Flex
          gap={6}
          w="100%"
          h="100%"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <MotionBox
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            w={{ base: "100%", md: "50%" }}
          >
            <Image
              src={Saudi_German_Hospital}
              alt="why_choose_us_image"
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius='md'
            />
          </MotionBox>
          <Box w={{ base: "100%", md: "50%" }}>
            {points.map((point) => (
              <Point
                key={point.id}
                id={point.id}
                title={point.title}
                text={point.text}
                mt="5"
              />
            ))}
          </Box>
        </Flex>
      </Container>
    );
  }
}
