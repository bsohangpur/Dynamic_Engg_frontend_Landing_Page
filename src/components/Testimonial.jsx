import React, { Component } from "react";
import { Box, Heading, Container, Divider, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { testimonials } from "../data";

const MotionBox = motion(Box);

export default class Testimonial extends Component {
  render() {
    return (
      <Container py={12} maxW="container.xl" centerContent="true">
        <Heading as="h2" size="lg">
          What Our Clients Say
        </Heading>
        <Divider w={36} />
        <Box className="mt-12 w-full h-full">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="w-full md:w-4/5 pb-12 h-[450px] md:h-[350px]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="w-full h-full md:h-64" key={testimonial.name + index}>
                <MotionBox
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full p-4 h-full mx-12 border-2 border-blue-shade-500 rounded-lg flex flex-col justify-center items-center"
                >
                  <Text className="text-lg font-bold ">{testimonial.name}</Text>
                  <Text className="text-sm mb-4 font-semibold">{testimonial.occupation}</Text>
                  <Text className="text-base md:w-2/3">{testimonial.message}</Text>
                </MotionBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    );
  }
}
