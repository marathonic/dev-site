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
    if (currentScroll === "home") return;
    if (homeInView) {
      setCurrentScroll("home");
    }
    // eslint-disable-next-line
  }, [homeInView]);

  return (
    <main className="splash" ref={homeRef}>
      <div className="hero">
        <h1 className="hero-h1 with-shadow">Hello</h1>
        {/* <h1 className="hero-h1 with-shadow">world</h1> */}

        <img src={songoku} alt="" className="goku-hero" />
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
