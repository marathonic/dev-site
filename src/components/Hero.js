import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import songoku from "../assets/GokuBgTransparentBg2.png";

// const Goku = new Image();
// Goku.src = "test-folder/GokuTransparentBg.jpg";

const Hero = ({ currentScroll, setCurrentScroll }) => {
  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  useEffect(() => {
    setTimeout(() => {
      setCurrentScroll("home");
    }, 100);
  }, []);

  useEffect(() => {
    if (currentScroll === "home") return;
    if (homeInView) {
      setCurrentScroll("home");
    }
    // eslint-disable-next-line
  }, [homeInView]);

  // BREATHE: INHALE - EXHALE:
  // Transparent circle, with brown borders.
  // Breathing animation runs once, then turns into a happy face
  // When Inhalation commences, the first circle stays in place as the original size, and takes 50% opacity and a dashed/dotted border;
  // The expanding circle gets full opacity. THe original circle serves as an indication so we have a point of reference to target for the exhalation.
  // When the exhalation completes, the 50% opacity circle disappears and we're left with 1 circle.

  return (
    <main className="splash" ref={homeRef} id="home-id">
      <div className="hero">
        <h1 className="hero-h1 with-shadow">Hello</h1>
        {/* <h1 className="hero-h1 with-shadow">world</h1> */}

        {/* <img src={songoku} alt="" className="goku-hero" /> */}
        <div className="breathing-circle-container">
          <div className="breathing-circle"></div>
          <span className="breathe-text">BREATHE</span>
        </div>
        {/* {`${Goku}`} */}
        {/* <img
          src="/home/medjed/Documents/projects/dev-site/test-folder/GokuTransparentBg.jpg"
          alt=""
          className="goku-hero"
        ></img> */}
      </div>
    </main>
  );
};

export default Hero;
