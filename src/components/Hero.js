import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import songoku from "../assets/GokuBgTransparentBg2.png";

// const Goku = new Image();
// Goku.src = "test-folder/GokuTransparentBg.jpg";

const Hero = ({ currentScroll, setCurrentScroll }) => {
  const [timerCount, setTimerCount] = useState(4);
  const [timerSecondRound, setTimerSecondRound] = useState(false);
  const [timerThirdRound, setTimerThirdRound] = useState(false);
  const [timerCountActive, setTimerCountActive] = useState(true);
  const [isBreatheActive, setIsBreatheActive] = useState(false);
  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const breathe = () => {
    setIsBreatheActive(true);
    // let inhale = document.querySelector(".breathe-inhale");
    //
    // let hold = document.querySelector(".breathe-hold");
    //
    // let exhale = document.querySelector(".breathe-exhale");
    //
    // setTimeout(() => {
    // setCurrentScroll("home");
    // }, 100);
    //
    // setTimeout(() => {
    // inhale?.classList.add("hide");
    //
    // hold?.classList.remove("hide");
    // }, 4000);
    //
    // setTimeout(() => {
    // let hold = document.querySelector(".breathe-hold");
    // hold?.classList.add("hide");
    //
    // exhale?.classList.remove("hide");
    // }, 11000);
    //
    // setTimeout(() => {
    // exhale?.classList.add("hide");
    // }, 19900);
    //
    // setTimeout(() => {
    // let count = document.querySelector(".timer-count");
    // count.classList.add("hide");
    // }, 20000);
  };

  useEffect(() => {
    let inhale = document.querySelector(".breathe-inhale");

    let hold = document.querySelector(".breathe-hold");

    let exhale = document.querySelector(".breathe-exhale");

    setTimeout(() => {
      setCurrentScroll("home");
    }, 100);

    setTimeout(() => {
      inhale?.classList.add("hide");

      hold?.classList.remove("hide");
    }, 4000);

    setTimeout(() => {
      hold?.classList.add("hide");

      exhale?.classList.remove("hide");
    }, 11000);

    setTimeout(() => {
      exhale?.classList.add("hide");
    }, 19900);

    setTimeout(() => {
      let count = document.querySelector(".timer-count");
      count.classList.add("hide");
    }, 20000);
  }, [isBreatheActive]);

  useEffect(() => {
    // +++++++++++++++++++++++++++++++++++++ CONTINUE HERE!!!
    // WORKS FOR 3 ROUNDS, yet still keeps going, starting at 8. Find a way to stop at the last cycle, so that the countdown from 8 will stop at 0
    // if(timerThirdRound && timerCount === 1) {}

    if (!isBreatheActive) return;

    if (timerThirdRound && timerCount === 0 && timerCountActive) {
      setTimerSecondRound(false);
      setTimerCount(8);
      setTimerCountActive(false);
      console.log("set timer count to false");
    }
    // if (timerThirdRound && timerCount === 1) {
    // setTimerCountActive(false);
    // }
    timerCount > 0 && setTimeout(() => setTimerCount(timerCount - 1), 1000);
    if (timerCountActive && timerCount === 0 && !timerThirdRound) {
      setTimerCount(7);
      setTimerThirdRound(true);
    }
    // timerCountActive && timerCount === 0 && setTimeout(() => setTimerCount )
  }, [timerCount, isBreatheActive]);

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
          <div
            className={isBreatheActive ? "breathing-circle" : "static-circle"}
          ></div>
          {!isBreatheActive && (
            <button className="breathe-btn" onClick={breathe}>
              Breathe
            </button>
          )}
          {isBreatheActive && (
            <span className="breathe-text">
              <p className="breathe-inhale">INHALE</p>
              <p className="breathe-hold hide">HOLD</p>
              <p className="breathe-exhale hide">EXHALE</p>
            </span>
          )}
          <p className="timer-count">{isBreatheActive && timerCount}</p>
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
