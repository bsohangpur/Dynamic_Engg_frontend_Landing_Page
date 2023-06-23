import React, { Component } from "react";
import { Project as ProjectComponent } from "../components";
import PageAnimation from "./PageAnimation";
import ScrollProgress from "./ScrollProgress";

export default class Project extends Component {
  render() {
    return (
      <div>
        <ScrollProgress/>
        <PageAnimation>
          <div className="bg-blue-shade-100">
            <ProjectComponent />
          </div>
        </PageAnimation>
      </div>
    );
  }
}
