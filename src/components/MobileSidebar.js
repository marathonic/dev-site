import React, { useEffect, useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
  currentScroll,
  setCurrentScroll,
  scrollToSection,
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

  // we could also create a const scrollToSection = (e) => {
  // let sectionClicked = e.target.id.substring(3).toLowerCase();
  // switch (sectionClicked) {
  // case 'projects':
  //
  // break;
  //
  // default:
  // break;
  // }
  // ++++++ OR, alternatively:
  // just give the container elements ids that are the same as the sb-link button names,
  //  so the container of the projects section would be: #proj-id, and the button's in the sidebar would be #sb-proj;
  //  WE WANT TO REMOVE THE LAST 3 CHARACTERS FROM THE RIGHT, WHICH ARE ALWAYS "-id", is substring the right way?
  // let btnClicked = e.target.id;
  // let nameOfDOMSection = e.target.id <this gives us the button id, we'll get the section's id like so...: > .substring(3).toLowerCase();
  //  let sectionElement = document.querySelector(#`${nameOfDOMSection}`);
  //  sectionElement?.scrollIntoView({block: "center", behavior: "smooth"});
  // closeWithDelay(e);
  // }

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
                    onClick={(e) => scrollToSection(e, closeWithDelay)}
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
                    onClick={(e) => scrollToSection(e, closeWithDelay)}
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
                    onClick={(e) => scrollToSection(e, closeWithDelay)}
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
                    onClick={(e) => scrollToSection(e, closeWithDelay)}
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
