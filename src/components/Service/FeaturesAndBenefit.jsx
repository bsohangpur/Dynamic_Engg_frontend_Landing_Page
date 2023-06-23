import React, { Component } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const services = [
  {
    id: 1,
    title: "Mechanical Engineering",
    features: [
      "Product design and development",
      "Mechanical analysis and simulations",
      "Prototyping and testing",
    ],
    benefits: [
      "Innovative and efficient product designs",
      "Optimized performance and reliability",
      "Cost-effective manufacturing processes",
    ],
  },
  {
    id: 2,
    title: "Electrical Engineering",
    features: [
      "Circuit design and analysis",
      "Power systems engineering",
      "Electronics development",
    ],
    benefits: [
      "Safe and reliable electrical systems",
      "Efficient power distribution and management",
      "Cutting-edge electronic solutions",
    ],
  },
  {
    id: 3,
    title: "Civil Engineering",
    features: [
      "Structural design and analysis",
      "Infrastructure planning",
      "Construction management",
    ],
    benefits: [
      "Sturdy and resilient structures",
      "Optimized infrastructure development",
      "Effective project coordination and execution",
    ],
  },
];

class ServiceCard extends Component {
  render() {
    return (
      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <Heading mb={4}>{this.props.title}</Heading>
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold">Features:</Text>
          {this.props.features.map((feature) => (
            <Text key={feature}>{feature}</Text>
          ))}
          <Text fontWeight="bold" mt={4}>
            Benefits:
          </Text>
          {this.props.benefits.map((benefit) => (
            <Text key={benefit}>{benefit}</Text>
          ))}
        </VStack>
      </Box>
    );
  }
}

export default class FeaturesAndBenefit extends Component {
  render() {
    return (
      <Container maxW="container.xl" py={12}>
        <Box>
          <Heading textAlign="center" mb={10}>
            Features and Benefits
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    );
  }
}
