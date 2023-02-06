import React, { useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
}) => {
  let option1 = document.querySelector(".current-link");

  const [isSelected, setIsSelected] = useState(null);

  function selectLink(e) {
    // const shit = document.querySelector(".sidebar-ul");
    // const clickedListItem = e.target;
    // clickedListItem.classList.add("testing-shit");
    console.log("clicked this link ==>", e.target.id);
  }
  // delete this below ~~
  const allBtns = document.querySelectorAll(".side-btn");
  allBtns?.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e.target.id);
    });
  });
  // delete this above ~~~

  const closeWithDelay = (e) => {
    let targ = e.target;
    let clicked = targ.id.substring(3);
    let curr = document.querySelector(".current-link");
    let currentPage = curr.textContent.toLowerCase();
    if (currentPage === clicked) return;
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 700);
    return;
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-container fade-in">
            <ul className="sidebar-ul" id="shit-id-test">
              <li className="test-border">
                <div className="test-border-inner">
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
