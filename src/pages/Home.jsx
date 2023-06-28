import React, { Component } from "react";
import {
  About,
  Contact,
  Service,
  Hero,
  WhyChooseUS,
  Project,
  Testimonial,
} from "../components";
import PageAnimation from "./PageAnimation";
import ScrollProgress from "./ScrollProgress";
import ContactAddress from "../components/Contact/ContactAddress";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScrollProgress />
        <PageAnimation>
          <div className=" bg-blue-shade-100 sm:mt-0 -mt-24 md:-mt-24  ">
            <Hero />
          </div>
        </PageAnimation>
        <div className=" bg-blue-shade-200">
          <About />
        </div>
        <div className=" bg-blue-shade-100">
          <Service homeSlice={3} isHome={true} />
        </div>
        <div className=" bg-blue-shade-200">
          <WhyChooseUS />
        </div>
        <div className=" bg-blue-shade-100">
          <Contact />
        </div>
        <div className=" bg-blue-shade-200">
          <Project homeSlice={6} isHome={true} />
        </div>
        <div className=" bg-blue-shade-100">
          <ContactAddress />
        </div>
        <div className=" bg-blue-shade-200">
          <Testimonial />
        </div>
      </div>
    );
  }
}
