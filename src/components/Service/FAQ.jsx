import React, { Component } from "react";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { faqs } from "../../data";

class FAQItem extends Component {
  render() {
    return (
      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <Heading mb={4}>{this.props.question}</Heading>
        <Text>{this.props.answer}</Text>
      </Box>
    );
  }
}

export default class FAQ extends Component {
  render() {
    return (
      <Container maxW="container.xl" py={10}>
        <Box>
          <Heading textAlign="center" mb={10}>
            Frequently Asked Questions
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    );
  }
}
