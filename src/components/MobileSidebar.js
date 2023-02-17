import React, { useEffect } from "react";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  currentScroll,
  setCurrentScroll,
  scrollToSection,
}) => {
  const closeWithDelay = (e) => {
    let targ = e.target.id;
    let clicked = targ.substring(3);

    if (clicked === currentScroll) return;

    setTimeout(() => {
      setIsSidebarOpen(false);
      setCurrentScroll(clicked);
    }, 700);
    return;
  };

  useEffect(() => {
    setCurrentScroll("home");
    // eslint-disable-next-line
  }, []);

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
          </div>
        </div>
      )}
    </>
  );
};
