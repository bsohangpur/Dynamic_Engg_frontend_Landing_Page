import React, { Component } from "react";
import { About as AboutUs, WhyChooseUS, Testimonial } from "../components";

export default class About extends Component {
  render() {
    return <div>
      <AboutUs />
      <WhyChooseUS />
      <Testimonial />
    </div>;
  }
}
