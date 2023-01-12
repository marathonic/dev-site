import React from "react";
import songoku from "../assets/GokuTransparentBg.jpg";

// const Goku = new Image();
// Goku.src = "test-folder/GokuTransparentBg.jpg";

const Hero = () => {
  return (
    <main className="splash">
      <div className="hero">
        <h1 className="hero-h1">Hello</h1>
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
