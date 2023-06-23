import React, { Component } from "react";
import { Contact as ContactUs } from "../components";
import PageAnimation from "./PageAnimation";
import PrivacyPolicy from "../components/Contact/PrivacyPolicy";
import ScrollProgress from "./ScrollProgress";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ScrollProgress/>
        <div className=" bg-blue-shade-100">
          <PageAnimation>
            <ContactUs />
          </PageAnimation>
        </div>
        <div className=" bg-blue-shade-200">
          <PrivacyPolicy />
        </div>
      </div>
    );
  }
}
