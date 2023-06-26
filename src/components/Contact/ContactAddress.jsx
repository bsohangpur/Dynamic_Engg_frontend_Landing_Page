import React, { Component } from "react";
import { Box, Text, Flex, Spacer, Heading } from "@chakra-ui/react";

export default class ContactAddress extends Component {
  render() {
    return (
      <Box py={12}>
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={6}
        >
          <Heading
            as="h2"
            w="100%"
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            color="gray.700"
          >
            Address
          </Heading>
          <Text color="gray.700">
            P.O. Box 85293 Dubai, U.A.E Abu Dhabi - Sharjah - Doha.
          </Text>
        </Flex>
      </Box>
    );
  }
}
