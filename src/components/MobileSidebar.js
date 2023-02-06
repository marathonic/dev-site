import React, { useEffect, useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
}) => {
  let option1 = document.querySelector(".current-link");

  const [isSelected, setIsSelected] = useState(null);

  // delete this below ~~
  // const allBtns = document.querySelectorAll(".side-btn");
  // allBtns?.forEach((btn) => {
  // btn.addEventListener("click", function (e) {
  // console.log(e.target.id);
  // });
  // });
  // delete this above ~~~

  const closeWithDelay = (e) => {
    // If the button we clicked is disabled, nothing should happen by default, and no code should run, right? That's the point.
    // So if this is running, it means we've clicked a button other than the disabled one.
    // SO we should find what that disabled button is, and set it to not be disabled, then we disable the button we have just clicked.

    let btn = e.target;

    let clicked = btn.id.substring(3);
    let curr = document.querySelector(".current-link");
    let currentPage = curr.textContent.toLowerCase();
    console.log("current page", "==>", currentPage);
    console.log("clicked", "==>", clicked);
    if (currentPage === clicked) return;
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 700);
    return;
  };

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-container fade-in">
            <ul className="sidebar-ul" id="shit-id-test">
              <li className="test-border current-link">
                <div className="test-border-inner current-link">
                  <button
                    className="sidebar-li current-link side-btn"
                    id="sb-home"
                    onClick={closeWithDelay}
                  >
                    Home
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button
                    className="sidebar-li side-btn"
                    id="sb-proj"
                    onClick={closeWithDelay}
                  >
                    Projects
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button
                    className="sidebar-li side-btn"
                    id="sb-about"
                    onClick={closeWithDelay}
                  >
                    About
                  </button>
                </div>
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
