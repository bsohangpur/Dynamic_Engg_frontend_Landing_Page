import React, { Component } from "react";
import { Box, IconButton, ButtonGroup, Text } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsMenuButton } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    return (
      <Box>
        <Box className=" fixed bottom-4 right-4 z-[9999999999]">
          <ButtonGroup>
            <MotionIconButton
              aria-label="scroll button"
              icon={<FaArrowUp />}
              size="md"
              colorScheme="teal"
              borderRadius="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: this.state.isMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <MotionIconButton
              aria-label="scroll button"
              icon={<FaArrowDown />}
              size="md"
              colorScheme="green"
              borderRadius="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: this.state.isMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            />
            <IconButton
              aria-label="scroll button"
              icon={<BsMenuButton />}
              size="lg"
              colorScheme="blue"
              borderRadius="full"
              onMouseEnter={() => {
                this.setState({ isMenuOpen: !this.state.isMenuOpen });
              }}
              onMouseLeave={() => {
                this.setState({ isMenuOpen: !this.state.isMenuOpen });
              }}
            />
          </ButtonGroup>
        </Box>
        {this.props.children}
      </Box>
    );
  }
}
