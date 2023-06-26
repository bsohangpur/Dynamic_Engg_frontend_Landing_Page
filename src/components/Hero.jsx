import React, { Component } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const heroContent = [
  {
    bgImage:
      "https://img.freepik.com/free-photo/sun-setting-silhouette-electricity-pylons_1127-3239.jpg?w=900&t=st=1687757215~exp=1687757815~hmac=a65ffb54f8d564b92c182f531b6fd3f41d4d47e7789b444da15d4e6e75b6de47",
    heading: "Harnessing the Power of the Sun",
    subHeading: "Renewable Energy",
    text: "Discover how solar energy is revolutionizing the way we generate electricity and providing a sustainable solution for our future energy needs.",
  },
  {
    bgImage:
      "https://img.freepik.com/premium-photo/part-high-voltage-substation-with-switches-disconnectors_271853-265.jpg?w=900",
    heading: "The Backbone of Power Distribution",
    subHeading: "High Voltage Substations",
    text: "Explore the intricate network of high voltage substations and learn how they play a vital role in transmitting electricity from power plants to our homes and businesses.",
  },
  {
    bgImage:
      "https://img.freepik.com/free-photo/stop-switch-engine-room_627829-11484.jpg?w=900&t=st=1687757323~exp=1687757923~hmac=176c55115ef0d4d338222e38585c9488841b17e77c5801a112d48a535f2c7c97",
    heading: "Controlling the Power Flow",
    subHeading: "Engine Room Operations",
    text: "Step into the control center of an electrical power station and gain insights into the complex operations involved in managing and regulating the flow of electricity.",
  },
  {
    bgImage:
      "https://img.freepik.com/premium-photo/geothermal-heat-pump-system-with-water-circulating-being-heated-created-with-generative-ai_124507-173863.jpg?w=900",
    heading: "Harnessing Earth's Natural Heat",
    subHeading: "Geothermal Energy",
    text: "Learn about geothermal heat pump systems and how they utilize the earth's natural heat to provide efficient heating and cooling solutions for residential and commercial buildings.",
  },
];

const MotionBox = motion(Box);

export default class Hero extends Component {
  render() {
    return (
      <Box className=" w-full h-screen">
        <Swiper
          pagination={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination]}
          className="hero_swiper"
        >
          {heroContent.map((item, index) => (
            <SwiperSlide key={item.heading+index}>
              <MotionBox
                initial={{ x: -20, scale: 0.95, opacity: 0.5 }}
                whileInView={{ x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className=" h-full w-full"
                bgImage={item.bgImage}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                position="relative"
              >
                <Box className=" h-full w-full absolute top-0 left-0 bg-slate-950 bg-opacity-60" />
                <Flex className=" h-full w-full flex-col justify-center items-start p-4 md:w-1/2 ">
                  <Heading
                    size={{base:"2xl", md:"3xl",lg:"4xl"}}
                    className=" text-blue-shade-100 z-50 text-start mb-2"
                    as="h1"
                  >
                    {item.heading}
                  </Heading>
                  <Heading
                    size={{base:"lg", md:"xl",lg:"2xl"}}
                    className=" text-blue-shade-100 z-50 text-start mb-4"
                    as="h3"
                  >
                    {item.subHeading}
                  </Heading>
                  <Text className=" text-blue-shade-100 z-50 text-start opacity-95">
                    {item.text}
                  </Text>
                </Flex>
              </MotionBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }
}
