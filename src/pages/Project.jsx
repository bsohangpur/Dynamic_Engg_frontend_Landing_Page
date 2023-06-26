import React, { Component } from "react";
import { Project as ProjectComponent, ProjectHero } from "../components";
import PageAnimation from "./PageAnimation";
import ScrollProgress from "./ScrollProgress";

export default class Project extends Component {
  render() {
    return (
      <div>
        <ScrollProgress/>
        <PageAnimation>
          <div className="bg-blue-shade-100">
            <ProjectHero />
          </div>
        </PageAnimation>
        <div className="bg-blue-shade-200">
            <ProjectComponent />
          </div>
      </div>
    );
  }
}
