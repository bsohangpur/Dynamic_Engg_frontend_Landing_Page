import React, { Component } from "react";
import { Service as ServiceComponent } from "../components";
import FeaturesAndBenefit from "../components/Service/FeaturesAndBenefit";
import FAQ from "../components/Service/FAQ";
import PageAnimation from "./PageAnimation";
import ScrollProgress from "./ScrollProgress";

export default class Service extends Component {
  render() {
    return (
      <div>
        <ScrollProgress />
        <PageAnimation>
          <div className=" bg-blue-shade-100">
            <ServiceComponent />
          </div>
        </PageAnimation>
        <div className=" bg-blue-shade-200">
          <FeaturesAndBenefit />
        </div>

        <div className=" bg-blue-shade-100">
          <FAQ />
        </div>
      </div>
    );
  }
}
