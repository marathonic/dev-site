import React, { useEffect } from "react";
import "../styles/about.css";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io5";
import { useInView } from "react-intersection-observer";

function About({
  isTablet,
  isDesktop,
  dynIconSize,
  setCurrentScroll,
  currentScroll,
}) {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  useEffect(() => {
    if (currentScroll === "about") return;
    if (aboutInView) {
      setCurrentScroll("about");
    }
    // eslint-disable-next-line
  }, [aboutInView]);

  return (
    <section className="about-container" ref={aboutRef} id="about-id">
      <h1 className="h1-section h1-about">About</h1>
      <span className="about-description">
        <div className="dev-stack-icons">
          <IoLogoHtml5 size={dynIconSize} color="crimson" />
          <IoLogoCss3 size={dynIconSize} color="purple" />
          <IoLogoJavascript size={dynIconSize} color="goldenrod" />
          <IoLogoReact size={dynIconSize} color="cyan" />
        </div>
      </span>
      <span className="about-description">
        <p className="bold about-mission">
          I'm a passionate dev eager to join an organization with a vision.
        </p>
        <br />

        <h3 className="about-skills-title">Experience with</h3>
        <br />

        <p className="about-tech-details">HTML, CSS, JS, React, Firebase</p>
        <br />
        <h3 className="about-skills-title">Currently Honing</h3>
        <br />
        <p className="about-tech-details">Node.js</p>
      </span>
    </section>
  );
}

export default About;
