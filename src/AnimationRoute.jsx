import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Contact, Project, Service } from "./pages";
import React, { Component } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import ScrollButton from "./ScrollButton";

class RouteSetting extends Component {
  render() {
    return (
      <AnimatePresence>
        <Routes
          location={this.props.location}
          key={this.props.location.pathname}
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </AnimatePresence>
    );
  }
}

export default function AnimationRoute() {
  const location = useLocation();
  return (
    <ScrollButton>
      <RouteSetting location={location} />
    </ScrollButton>
  );
}
