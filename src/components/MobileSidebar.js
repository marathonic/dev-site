import React from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          className={`${
            isSidebarOpen ? "sidebar fade-in" : "sidebar hide-sb fade-out"
          }`}
        >
          <div className="sidebar-container">
            <ul className="sidebar-ul">
              <li className="sidebar-li current-link">Home</li>
              <li className="sidebar-li">Projects</li>
              <li className="sidebar-li">About</li>
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
