import React, { Component } from "react";
import { Box, Flex, Text, Button, IconButton, Image } from "@chakra-ui/react";
import { DragHandleIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { links } from "../data";
import { Link } from "react-router-dom";
import { logo } from "../assets";

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
        padding={6}
        bg="blue.300"
        color="white"
        position="relative"
      >
        <MotionBox
          as={Link}
          to="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src={logo} width={200} height={75} alt="logo" />
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
                  variant={{ base: "outline", md: "ghost" }}
                  colorScheme={{ base: "teal", md: "blackAlpha" }}
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
