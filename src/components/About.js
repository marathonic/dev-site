import React from "react";
import "../styles/about.css";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io5";

function About() {
  return (
    <section className="about-container">
      <h1 className="h1-section h1-about">About</h1>
      <span className="about-description">
        <p>Full stack developer</p>
        <div className="dev-stack-icons">
          <IoLogoHtml5 size={70} color="crimson" />
          <IoLogoCss3 size={70} color="purple" />
          <IoLogoJavascript size={70} color="goldenrod" />
          <IoLogoReact size={70} color="cyan" />
          {/* 
          <img
            className="dev-tech-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="javascript logo"
          />
           */}
        </div>
      </span>
    </section>
  );
}

export default About;
