import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Hero = ({ currentScroll, setCurrentScroll }) => {
  const [timerCount, setTimerCount] = useState(4);
  const [timerThirdRound, setTimerThirdRound] = useState(false);
  const [timerCountActive, setTimerCountActive] = useState(true);
  const [isBreatheActive, setIsBreatheActive] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [hasBeenVisited, setHasBeenVisited] = useState(() => {
    const visitStatus = sessionStorage.getItem("hasBeenVisited");
    const visitedVal = JSON.parse(visitStatus);
    return visitedVal || false;
  });
  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const breathe = () => {
    setIsBreatheActive(true);

    setTimeout(() => {
      let count = document.querySelector(".timer-count");
      count.classList.add("hide");
      setIsAnimationComplete(true);
      setHasBeenVisited(true);
      // setHasBeenVisited(sessionStorage.setItem("hasBeenVisited", true));
      sessionStorage.setItem("hasBeenVisited", true);
    }, 20000);
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
    // eslint-disable-next-line
  }, [isBreatheActive]);

  useEffect(() => {
    if (!isBreatheActive) return;

    if (timerThirdRound && timerCount === 0 && timerCountActive) {
      setTimerCount(8);
      setTimerCountActive(false);
    }

    timerCount > 0 && setTimeout(() => setTimerCount(timerCount - 1), 1000);
    if (timerCountActive && timerCount === 0 && !timerThirdRound) {
      setTimerCount(7);
      setTimerThirdRound(true);
    }
    // eslint-disable-next-line
  }, [timerCount, isBreatheActive]);

  useEffect(() => {
    if (currentScroll === "home") return;
    if (homeInView) {
      setCurrentScroll("home");
    }
    // eslint-disable-next-line
  }, [homeInView]);

  return (
    <main className="splash" ref={homeRef} id="home-id">
      <div className="hero">
        <h1 className="hero-h1 with-shadow">Hello</h1>

        <div className="breathing-circle-container">
          {!isAnimationComplete && !hasBeenVisited && (
            <button
              className={isBreatheActive ? "breathing-circle" : "static-circle"}
              onClick={breathe}
            ></button>
          )}

          {isBreatheActive && (
            <span className="breathe-text">
              <p className="breathe-inhale">INHALE</p>
              <p className="breathe-hold hide">HOLD</p>
              <p className="breathe-exhale hide">EXHALE</p>
            </span>
          )}
          {isBreatheActive && <p className="timer-count">{timerCount}</p>}
          {(isAnimationComplete || hasBeenVisited) && (
            <div className="post-circle">
              <div className="smile-circle"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
