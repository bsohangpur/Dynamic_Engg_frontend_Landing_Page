import React, { Component } from "react";
import {
  Box,
  Button,
  Image,
  Grid,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { service } from "../data";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

export default class Service extends Component {
  render() {
    return (
      <Container maxW="container.xl" py="10">
        <Box className=" flex flex-col items-center justify-center">
          <Heading>Our Service</Heading>
          <Text textAlign='center' mt={4} maxW='container.md'>
            Our services consist of design and supervision of Mechanical,
            Electrical Systems, and installations for building and specialized
            facilities. These include Feasibility Studies, Investigative
            Reports, Conceptual Designs, Cost Estimates and Analysis, Production
            of Specifications and Bill of Quantities, Bids Evaluation and
            Recommendation, Contract Negotiations, Detailed Design and Working
            Drawings, Project Management, Supervision and Site Management. By
            discipline, the services are as detailed below.
          </Text>
          <Box>
            {service.map((item, index) => (
              <Box
                key={item.title + index}
                className="flex flex-col items-center"
              >
                <Heading
                  as="h4"
                  style={{ fontSize: "2em" }}
                  className="text-blue-950 mt-6 underline"
                >
                  {index + 1}. {Object.keys(item)}
                </Heading>
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={6}
                  mt="10"
                >
                  {item[Object.keys(item)]
                    .slice(0, this.props.homeSlice)
                    .map((item, index) => (
                      <MotionBox
                        key={item.title + index}
                        initial={item.initial}
                        whileInView={{ scale: 1, x: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ rotateY: 180 }}
                        whileTap={{ rotateY: 180 }}
                        className=" relative rounded-md shadow-md"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          objectFit="cover"
                          objectPosition="center"
                          w={400}
                          h={250}
                          className=""
                          loading="lazy"
                        />
                        <MotionBox
                          initial={{ opacity: 0, rotateY: 180 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          whileHover={{ opacity: 1 }}
                          whileTap={{ opacity: 1 }}
                          className="absolute top-0 left-0 w-full h-full flex items-center p-4 font-medium text-blue-50 backdrop-blur-3xl text-center justify-center"
                        >
                          <Text pr>{item.text}</Text>
                        </MotionBox>
                        <motion.h6 className=" text-center py-4">
                          {item.title}
                        </motion.h6>
                      </MotionBox>
                    ))}
                </Grid>
              </Box>
            ))}
          </Box>

          {/* {service.map((item, index) => (
              
            ))} */}

          <Box display={!this.props.isHome && "none"} mt={12}>
            <Button
              as={Link}
              to="/services"
              size="lg"
              colorScheme="teal"
              variant="solid"
            >
              Explore Our All Services
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
