import React, { Component } from "react";
import { Box, Flex, Button, IconButton, Image } from "@chakra-ui/react";
import { DragHandleIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { links } from "../data";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";

const MotionBox = motion(Box);

function LinkAnimation({ link }) {
  const location = useLocation();
  return (
    <motion.hr
      className=" w-[20%] hidden md:block h-6 absolute rotate-180"
      initial={{ width: "20%", opacity: 0 }}
      whileHover={{ width: "80%", opacity: 1 }}
      transition={{ duration: 1 }}
      animate={
        location.pathname === link.link
          ? { width: "80%", opacity: 1 }
          : { width: "20%", opacity: 0 }
      }
    />
  );
}

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
        padding={2}
        px={6}
        position="relative"
      >
        <MotionBox
          as={Link}
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className=' p-2'
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
                  fontSize={18}
                  onClick={() => this.setState({ isMenu: !this.state.isMenu })}
                  variant={{ base: "outline", md: "ghost" }}
                  colorScheme={{ base: "teal", md: "blackAlpha" }}
                  className="relative flex flex-col items-center"
                >
                  {link.name}
                  <LinkAnimation link={link} />
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
