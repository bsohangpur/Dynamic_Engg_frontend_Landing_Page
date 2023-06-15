import React, { Component } from "react";
import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { DragHandleIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { links } from "../data";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false,
    };
  }

  render() {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={4}
        bg="gray.900"
        color="white"
        position="relative"
      >
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Text fontSize="xl" fontWeight="bold">
            Dynamic Engineering
          </Text>
        </MotionBox>
        <Flex align="center">
          <Box
            className={`${
              this.state.isMenu ? "nav_mobile_open" : "nav_mobile_close"
            } md:flex`}
          >
            {links.map((link, index) => (
              <MotionBox
                key={link.name + index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                ml={4}
              >
                <Button
                  as={Link}
                  to={link.link}
                  variant={{base: "outline", md: "ghost"}}
                  colorScheme={{base: "teal", md: "blackAlpha"}}
                >
                  {link.name}
                </Button>
              </MotionBox>
            ))}
          </Box>
          <Box className="md:hidden block ">
            <MotionBox
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              ml={4}
            >
              <IconButton
                onClick={() => this.setState({ isMenu: !this.state.isMenu })}
                icon={this.state.isMenu ? <CloseIcon /> : <DragHandleIcon />}
              />
            </MotionBox>
          </Box>
        </Flex>
      </Flex>
    );
  }
}
