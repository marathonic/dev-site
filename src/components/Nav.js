import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/nav.css";

export const Nav = ({ isDesktop, setIsSidebarOpen, isSidebarOpen }) => {
  const handleSidebarToggle = () => {
    const sidebarContainer = document.querySelector(".sidebar-container");
    if (isSidebarOpen && !sidebarContainer?.classList.contains("fade-out")) {
      sidebarContainer?.classList.add("fade-out");
      setTimeout(() => {
        setIsSidebarOpen(!isSidebarOpen);
      }, 700);
      return;
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="nav">
      {isDesktop && (
        <ul className="nav-ul">
          <li className="nav-li">Projects</li>
          <li className="nav-li">Contact</li>
          <li className="nav-li">Story</li>
        </ul>
      )}
      {!isDesktop && (
        <button className="menu-btn" onClick={handleSidebarToggle}>
          <AiOutlineMenu style={{ pointerEvents: "none" }} />
        </button>
      )}
    </nav>
  );
};
