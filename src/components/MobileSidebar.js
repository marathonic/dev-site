import React from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({ isSidebarOpen }) => {
  let option1 = document.querySelector(".current-link");

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-container fade-in">
            <ul className="sidebar-ul">
              <li className="test-border current-link">
                <div className="test-border-inner current-link">
                  <div className="sidebar-li current-link">Home</div>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <div className="sidebar-li test">Projects</div>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <div className="sidebar-li">About</div>
                </div>
              </li>
            </ul>
            <div className="sidebar-contact">
              <div className="sb-contact-box">Call</div>
              <div className="sb-contact-box">Message</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
