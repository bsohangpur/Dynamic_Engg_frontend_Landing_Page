import React, { Component } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Container,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MotionBox = motion(Box);

export default class Testimonial extends Component {
  render() {
    return (
      <Container mb={12} maxW="container.xl" centerContent="true">
        <Heading as="h2" size="lg">
          What Our Clients Say
        </Heading>
        <Divider w={36}/>
        <Box className="mt-12 w-full h-full">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="w-4/5 pb-12 h-[350px]"
          >
            <SwiperSlide>
              <MotionBox
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full mx-12 border-2 rounded-lg flex justify-center items-center"
              >
                1
              </MotionBox>
            </SwiperSlide>
            <SwiperSlide>
              <MotionBox
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full mx-12 border-2 rounded-lg flex justify-center items-center"
              >
                2
              </MotionBox>
            </SwiperSlide>
            <SwiperSlide>
              <MotionBox
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full mx-12 border-2 rounded-lg flex justify-center items-center"
              >
                3
              </MotionBox>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    );
  }
}
