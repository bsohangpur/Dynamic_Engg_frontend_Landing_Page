import React, { Component } from "react";
import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { socials, links } from "../data";
import { Link as ReactLink } from "react-router-dom";

const MotionBox = motion(Box);

export default class Footer extends Component {
  render() {
    return (
      <Box as="footer" className=" bg-blue-shade-500 text-gray-50 py-12">
        <Flex direction="column" align="center" justify="center" mb={8}>
          <MotionBox
            as="h2"
            fontWeight="bold"
            fontSize="2xl"
            className=" cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Dynamic Engineering
          </MotionBox>
          <Text textAlign="center" mt={2}>
            Heavy Electric Equipments for Constructions
          </Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Flex align="center">
            <Icon as={FaPhone} mr={2} />
            <Link href="tel:+1234567890">050 215 9679</Link>
          </Flex>
          <Flex align="center" mt={2}>
            <Icon as={FaEnvelope} mr={2} />
            <Link href="mailto:info@dynamicengineering.com">
              info@dynamic-engg.com
            </Link>
          </Flex>
          <Flex align="center" flexWrap='wrap' gap={4} mt={4}>
            {links.map((link) => (
              <Button
                as={ReactLink}
                variant="link"
                color="gray.50"
                size='lg'
                key={link.name}
                to={link.link}
              >
                {link.name}
              </Button>
            ))}
          </Flex>
        </Flex>
        <Box mt={4} textAlign="center">
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Dynamic Engineering. All rights
            reserved.
          </Text>
        </Box>
        <Box color="white" py={8}>
          <Flex justify="center" flexWrap="wrap" gap={2} my={4}>
            {socials.map((social) => (
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
                  variant="outline"
                />
              </MotionBox>
            ))}
          </Flex>
        </Box>
      </Box>
    );
  }
}

// const Footer = () => {
//   return (

//   );
// };

// export default Footer;
