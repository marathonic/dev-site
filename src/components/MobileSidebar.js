import React, { useEffect, useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
  currentScroll,
  setCurrentScroll,
}) => {
  const closeWithDelay = (e) => {
    let targ = e.target.id;
    let clicked = targ.substring(3);

    if (clicked === currentScroll) return;
    console.log(clicked);

    setTimeout(() => {
      setIsSidebarOpen(false);
      setCurrentScroll(clicked);
    }, 700);
    return;
  };

  const handleHome = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeWithDelay(e);
  };

  const handleProjects = (e) => {
    let projectsSection = document.querySelector("#projects-id");
    projectsSection?.scrollIntoView({ block: "center", behavior: "smooth" });
    closeWithDelay(e);
  };
  // ---------------++++++++++++++++++++++++++++++++++++++ should we delete this useEffect? Try both ways
  useEffect(() => {
    setCurrentScroll("home");
    // eslint-disable-next-line
  }, []);

  // uhhhhhh what? the console says the current scroll is home, and then it says it's proj
  console.log(currentScroll);

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-container fade-in">
            <ul className="sidebar-ul" id="shit-id-test">
              <li className="test-border current-link">
                {currentScroll !== "home" && (
                  <button
                    className="sidebar-li side-btn"
                    id="sb-home"
                    onClick={handleHome}
                  >
                    Home
                  </button>
                )}
                {currentScroll === "home" && (
                  <span className="selection-icon">
                    <button
                      className="sidebar-li side-btn current-link"
                      id="sb-home"
                      onClick={closeWithDelay}
                    >
                      Home
                    </button>
                  </span>
                )}
              </li>
              <li className="test-border">
                {currentScroll !== "proj" && (
                  <button
                    className="sidebar-li side-btn"
                    id="sb-proj"
                    onClick={handleProjects}
                  >
                    Projects
                  </button>
                )}
                {currentScroll === "proj" && (
                  <span className="selection-icon">
                    <button
                      className="sidebar-li side-btn current-link"
                      id="sb-proj"
                      onClick={closeWithDelay}
                    >
                      Projects
                    </button>
                  </span>
                )}
              </li>
              <li className="test-border">
                {currentScroll !== "about" && (
                  <button
                    className="sidebar-li side-btn"
                    id="sb-about"
                    onClick={closeWithDelay}
                  >
                    About
                  </button>
                )}
                {currentScroll === "about" && (
                  <span className="selection-icon">
                    <button
                      className="sidebar-li side-btn current-link"
                      id="sb-about"
                      onClick={closeWithDelay}
                    >
                      About
                    </button>
                  </span>
                )}
              </li>
              <li className="test-border">
                {currentScroll !== "contact" && (
                  <button
                    className="sidebar-li side-btn"
                    id="sb-contact"
                    onClick={closeWithDelay}
                  >
                    Contact
                  </button>
                )}
                {currentScroll === "contact" && (
                  <span className="selection-icon">
                    <button
                      className="sidebar-li side-btn current-link"
                      id="sb-contact"
                      onClick={closeWithDelay}
                    >
                      Contact
                    </button>
                  </span>
                )}
              </li>
            </ul>
            <div className="sidebar-contact">
              <button className="sb-contact-box">Call</button>
              <button className="sb-contact-box">Message</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
