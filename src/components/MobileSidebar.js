import React, { useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({ isSidebarOpen }) => {
  let option1 = document.querySelector(".current-link");

  const [isSelected, setIsSelected] = useState(null);

  function selectLink(e) {
    // const shit = document.querySelector(".sidebar-ul");
    // const clickedListItem = e.target;
    // clickedListItem.classList.add("testing-shit");
    console.log("clicked this link ==>", e.target.id);
  }

  const allBtns = document.querySelectorAll(".side-btn");
  allBtns?.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e.target.id);
    });
  });

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
                  >
                    Home
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button className="sidebar-li side-btn" id="sb-proj">
                    Projects
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button className="sidebar-li side-btn" id="sb-about">
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
