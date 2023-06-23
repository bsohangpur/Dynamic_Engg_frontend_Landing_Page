import React, { Component } from "react";
import {
  About,
  Contact,
  Hero,
  Service,
  WhyChooseUS,
  Project,
  Testimonial,
} from "../components";
import PageAnimation from "./PageAnimation";
import ScrollProgress from './ScrollProgress'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScrollProgress/>
        <PageAnimation>
          <div className=" bg-blue-shade-100">
            <Hero />
          </div>
        </PageAnimation>
        <div className=" bg-blue-shade-200">
          <About />
        </div>
        <div className=" bg-blue-shade-100">
          <Service isHome={true} />
        </div>
        <div className=" bg-blue-shade-200">
          <WhyChooseUS />
        </div>
        <div className=" bg-blue-shade-100">
          <Contact />
        </div>
        <div className=" bg-blue-shade-200">
          <Project />
        </div>
        <div className=" bg-blue-shade-100">
          <Testimonial />
        </div>
      </div>
    );
  }
}
