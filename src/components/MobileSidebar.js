import React, { useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
}) => {
  const [currentScroll, setCurrentScroll] = useState("home");
  // delete this below ~~
  // const allBtns = document.querySelectorAll(".side-btn");
  // allBtns?.forEach((btn) => {
  // btn.addEventListener("click", function (e) {
  // console.log(e.target.id);
  // });
  // });
  // delete this above ~~~

  const closeWithDelay = (e) => {
    let targ = e.target.id;
    let clicked = targ.substring(3);
    // let curr = document.querySelector(".current-link");
    // let currentPage = curr.textContent.toLowerCase();
    // if (currentPage === clicked) return;
    if (clicked === currentScroll) return;
    console.log(clicked);
    // let curr = document.querySelector(".current-link");
    // curr?.classList.remove("current-link");
    setTimeout(() => {
      setIsSidebarOpen(false);
      setCurrentScroll(clicked);
    }, 700);
    return;
  };

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
                    onClick={closeWithDelay}
                  >
                    Home
                  </button>
                )}
                {currentScroll === "home" && (
                  <button
                    className="sidebar-li side-btn current-link"
                    id="sb-home"
                    onClick={closeWithDelay}
                  >
                    Home
                  </button>
                )}
              </li>
              <li className="test-border">
                {currentScroll !== "proj" && (
                  <button
                    className="sidebar-li side-btn"
                    id="sb-proj"
                    onClick={closeWithDelay}
                  >
                    Projects
                  </button>
                )}
                {currentScroll === "proj" && (
                  <button
                    className="sidebar-li side-btn current-link"
                    id="sb-proj"
                    onClick={closeWithDelay}
                  >
                    Projects
                  </button>
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
                  <button
                    className="sidebar-li side-btn current-link"
                    id="sb-about"
                    onClick={closeWithDelay}
                  >
                    About
                  </button>
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
