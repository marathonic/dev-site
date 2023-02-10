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
      <span className="about-description">
        <p className="bold">
          I'm a passionate dev eager to join an organization with a vision.
        </p>
        <br />

        <h3 className="about-skills-title">Current Skills</h3>
        <br />

        {/* We could just put the <span className="about-description"><div className="dev-stack-icons"><IoLogoHtml5/><etc... /></div></span> right here */}
        {/* And also, put each of those <Icon /> elements inside of individual <span></span> elements, and inside of the spans, add a <p></p> with the name of the tech in the icon. Example: <p>HTML</p> */}

        <ul>
          <li>JS</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </span>
    </section>
  );
}

export default About;
