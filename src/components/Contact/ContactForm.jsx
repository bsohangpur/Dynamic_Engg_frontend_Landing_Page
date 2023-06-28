import React from "react";
import {
  Box,
  Button,
  FormControl,
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
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgejwzdj");

  if (state.succeeded) {
    return (
      <div className=" w-full h-[450px] flex flex-col justify-center items-center">
        <p className=" text-green-400 text-xl">Thanks for Contacting Us!</p>
        <p className=" text-green-200 text-sm"> Our team will contact you soon...</p>
      </div>
    );
  }

  return (
    <Box className="h-full pb-10">
      <Box className="ml-12 flex flex-col justify-center h-1/4">
        <Heading as="h2">Contact Us</Heading>
        <Text className="text-blue-shade-100" mt={2} ml={2}>
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
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <InputGroup flexDirection={{ base: "column", md: "row" }} gap={6}>
                <FormControl
                  isInvalid={
                    formik.errors.firstName && formik.touched.firstName
                  }
                >
                  <InputGroup className="">
                    <InputLeftAddon
                      bg="rgb(0 78 103)"
                      color="white"
                      h={12}
                      children={<FaUser />}
                    />
                    <Input
                      id="name"
                      name="firstName"
                      type="text"
                      placeholder="enter your first name..."
                      className=" placeholder:text-blue-shade-100"
                      h={12}
                      border="1px"
                      borderColor="gray.400"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.lastName && formik.touched.lastName}
                >
                  <InputGroup className="">
                    <InputLeftAddon
                      bg="rgb(0 78 103)"
                      color="white"
                      h={12}
                      children={<FaUser />}
                    />
                    <Input
                      id="name"
                      name="lastName"
                      type="text"
                      placeholder="enter your last name..."
                      className=" placeholder:text-blue-shade-100"
                      h={12}
                      border="1px"
                      borderColor="gray.400"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputGroup>
                </FormControl>
              </InputGroup>

              <FormControl
                mt={4}
                isInvalid={formik.errors.phone && formik.touched.phone}
              >
                <InputGroup className="">
                  <InputLeftAddon
                    bg="rgb(0 78 103)"
                    color="white"
                    h={12}
                    children={<FaPhone />}
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="enter your phone number..."
                    className=" placeholder:text-blue-shade-100"
                    w={{ base: "auto", md: 600 }}
                    h={12}
                    border="1px"
                    borderColor="gray.400"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </InputGroup>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <InputGroup className="">
                  <InputLeftAddon
                    bg="rgb(0 78 103)"
                    color="white"
                    h={12}
                    children={<FaEnvelope />}
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="enter your email address..."
                    className=" placeholder:text-blue-shade-100"
                    w={{ base: "auto", md: 600 }}
                    h={12}
                    border="1px"
                    borderColor="gray.400"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </InputGroup>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={formik.errors.message && formik.touched.message}
              >
                <Textarea
                  id="message"
                  name="message"
                  as="textarea"
                  w={{ base: "100%", md: 650 }}
                  border="1px"
                  borderColor="gray.400"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></Textarea>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
