import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

class ContactForm extends React.Component {
  render() {
    return (
      <Box className="h-full">
        <Box className="ml-12 flex flex-col justify-center h-1/4">
          <Heading as="h2">Contact Us</Heading>
          <Text color="gray.600" mt={2} ml={2}>
            We will contact you soon
          </Text>
        </Box>
        <Box className=" flex justify-center items-center h-3/4">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              phone: Yup.number().required("Phone is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              message: Yup.string().required("Message is required"),
            })}
            onSubmit={(values) => {
              // Handle form submission logic here
              console.log(values);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <InputGroup flexDirection={{base: "column", md: "row"}} gap={6}>
                  <FormControl
                    isInvalid={
                      formik.errors.firstName && formik.touched.firstName
                    }
                  >
                    <InputGroup>
                      <InputLeftAddon
                        bg="gray.900"
                        color="white"
                        h={12}
                        children={<FaUser />}
                      />
                      <Input
                        id="name"
                        name="firstName"
                        type="text"
                        placeholder="enter your first name..."
                        h={12}
                        border="1px"
                        borderColor="gray.400"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </InputGroup>

                    <FormErrorMessage>
                      {formik.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.lastName && formik.touched.lastName
                    }
                  >
                    <InputGroup>
                      <InputLeftAddon
                        bg="gray.900"
                        color="white"
                        h={12}
                        children={<FaUser />}
                      />
                      <Input
                        id="name"
                        name="lastName"
                        type="text"
                        placeholder="enter your last name..."
                        h={12}
                        border="1px"
                        borderColor="gray.400"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                </InputGroup>

                <FormControl
                  mt={4}
                  isInvalid={formik.errors.phone && formik.touched.phone}
                >
                  <InputGroup>
                    <InputLeftAddon
                      bg="gray.900"
                      color="white"
                      h={12}
                      children={<FaPhone />}
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="number"
                      placeholder="enter your phone number..."
                      w={{ base: 400, md: 600 }}
                      h={12}
                      border="1px"
                      borderColor="gray.400"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

                <FormControl
                  mt={4}
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <InputGroup>
                    <InputLeftAddon
                      bg="gray.900"
                      color="white"
                      h={12}
                      children={<FaEnvelope />}
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="enter your email address..."
                      w={{ base: 400, md: 600 }}
                      h={12}
                      border="1px"
                      borderColor="gray.400"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl
                  mt={4}
                  isInvalid={formik.errors.message && formik.touched.message}
                >
                  <Textarea
                    id="message"
                    name="message"
                    as="textarea"
                    w={{ base: 450, md: 650 }}
                    border="1px"
                    borderColor="gray.400"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Textarea>
                  <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>

                <Button mt={4} colorScheme="teal" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  }
}

export default ContactForm;
