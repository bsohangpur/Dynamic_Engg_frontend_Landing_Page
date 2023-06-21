import React, { Component } from "react";
import { Box, Container, Divider, Flex, IconButton } from "@chakra-ui/react";
import ContactForm from "./Contact/ContactForm";
import { contact_side_image } from "../assets";
import { socials } from "../data";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default class Contact extends Component {
  render() {
    return (
      <Container maxW="container.xl" p={4} centerContent minH="100vh">
        <Divider w={24} />
        <Flex className=" shadow-lg border rounded-lg" w="100%" h="100%">
          <MotionBox
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            bgImage={contact_side_image}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            w={{ base: "100%", md: "30%" }}
            display={{ base: "none", lg: "block" }}
            className="rounded-s-lg "
            h="90vh"
          >
            <Box className="flex items-end justify-center h-full">
              <Flex justify="center" flexWrap="wrap" gap={2} my={4}>
                {socials.slice(0, 4).map((social) => (
                  <MotionBox
                    key={social.name}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      icon={<social.icon size={24} />}
                      mx={2}
                      fontSize="xl"
                      colorScheme={social.colorScheme}
                      variant="solid"
                    />
                  </MotionBox>
                ))}
              </Flex>
            </Box>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:rounded-e-lg p-6"
            bg="gray.200"
            w={{ base: "100%", lg: "70%" }}
          >
            <ContactForm />
          </MotionBox>
        </Flex>
      </Container>
    );
  }
}
