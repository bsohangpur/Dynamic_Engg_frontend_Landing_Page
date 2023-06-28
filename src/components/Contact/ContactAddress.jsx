import React, { Component } from "react";
import { Box, Text, Flex, Spacer, Heading } from "@chakra-ui/react";

export default class ContactAddress extends Component {
  render() {
    return (
      <Box py={12}>
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
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={6}
        >
          <Box>
            <Text color="gray.700">
              P.O. Box 85293 Dubai, U.A.E Abu Dhabi - Sharjah - Doha.
            </Text>
          </Box>
          <Box>
            <Box
              as="iframe"
              src="https://maps.google.com/maps?q=25%C2%B014'57.4%22N%2055%C2%B020'24.1%22E&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              id="gmap_canvas"
              frameborder="0"
              scrolling="no"
              style={{ width: "600px", height: "400px" }}
            />
          </Box>
        </Flex>
      </Box>
    );
  }
}
