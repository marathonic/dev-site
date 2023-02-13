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
  let adaptiveSize = isTablet || isDesktop ? 100 : 70;
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

  // I think we can make use of the ref here to pass in a state from App.js as prop to the MobileSidebar,
  // and then we can read that value here and conditionally scrollIntoView() to the aboutRef, then repeat that for all components.

  // useEffect(() => {
  // if(currentScroll === "about") {
  //
  // }
  // }, [currentScroll])

  // Not working, just copy the Contact.js and Projects.js way

  // useEffect(() => {
  // if (currentScroll === "about" && aboutInView) return;
  // if (currentScroll === "about" && !aboutInView) {
  // aboutRef?.current?.scrollIntoView({
  // block: "start",
  // behavior: "smooth",
  // });
  // }
  //
  // if (aboutInView) {
  // setCurrentScroll("about");
  // }
  // }, [aboutInView, currentScroll]);

  return (
    <section className="about-container" ref={aboutRef} id="about-id">
      <h1 className="h1-section h1-about">About</h1>
      <span className="about-description">
        <div className="dev-stack-icons">
          <IoLogoHtml5 size={dynIconSize} color="crimson" />
          <IoLogoCss3 size={dynIconSize} color="purple" />
          <IoLogoJavascript size={dynIconSize} color="goldenrod" />
          <IoLogoReact size={dynIconSize} color="cyan" />
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
        <p className="bold about-mission">
          I'm a passionate dev eager to join an organization with a vision.
        </p>
        <br />

        <h3 className="about-skills-title">Experience with</h3>
        <br />

        {/* We could just put the <span className="about-description"><div className="dev-stack-icons"><IoLogoHtml5/><etc... /></div></span> right here */}
        {/* And also, put each of those <Icon /> elements inside of individual <span></span> elements, and inside of the spans, add a <p></p> with the name of the tech in the icon. Example: <p>HTML</p> */}

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
