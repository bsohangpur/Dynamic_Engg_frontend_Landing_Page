import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, About, Contact, Project, Service } from "./pages";
import { Navbar, Footer } from "./constants";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Service />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    );
  }
}
