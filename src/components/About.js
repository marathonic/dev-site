import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section className="about-container">
      <h1 className="h1-section h1-about">About</h1>
      <span className="about-description">
        <p>Full stack developer</p>
        <div className="dev-stack-icons">
          <img
            className="dev-tech-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="javascript logo"
          />
        </div>
      </span>
    </section>
  );
}

export default About;
