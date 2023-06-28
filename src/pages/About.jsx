import React, { Component } from "react";
import { About as AboutUs, WhyChooseUS, Testimonial } from "../components";
import Team from "../components/About/Team";
import PageAnimation from "./PageAnimation";
import ScrollProgress from "./ScrollProgress";

export default class About extends Component {
  render() {
    return (
      <div>
        <ScrollProgress/>
        <PageAnimation>
          <div className=" bg-blue-shade-100">
            <AboutUs />
          </div>
        </PageAnimation>
        <div className=" bg-blue-shade-200">
          <WhyChooseUS />
        </div>
        {/* <div className=" bg-blue-shade-100">
          <Team />
        </div>
        <div className=" bg-blue-shade-200">
          <Testimonial />
        </div> */}
      </div>
    );
  }
}
