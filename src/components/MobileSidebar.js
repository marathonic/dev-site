import React from "react";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({ isSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-container">
          <ul className="sidebar-ul">
            <li className="sidebar-li">Home</li>
            <li className="sidebar-li">Projects</li>
            <li className="sidebar-li">About</li>
          </ul>
          <div className="sidebar-contact">
            <div>Call</div>
            <div>Message</div>
          </div>
        </div>
      )}
    </>
  );
};
