import React, { Component } from "react";
import { About, Contact, Hero, Service, WhyChooseUS, Project, Testimonial } from "../components";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Service />
        <WhyChooseUS/>
        <Contact/>
        <Project/>
        <Testimonial/>
      </div>
    );
  }
}
