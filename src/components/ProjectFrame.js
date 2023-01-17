import React from "react";
import screenshot from "../assets/img/screenshot-animeLog.png";
import "../styles/projects.css";

export const ProjectFrame = () => {
  return (
    <div className="project-frame">
      <div className="project">
        <div className="project-preview-gif">
          <img src={screenshot} alt="" />
        </div>
      </div>
    </div>
  );
};
