import React from "react";
import "../styles/projects.css";
import { ProjectFrame } from "./ProjectFrame";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="h1-projects">projects</h1>
      <div className="project-tab">
        <ProjectFrame />
      </div>
    </div>
  );
};
