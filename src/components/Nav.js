import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/nav.css";
import { MobileBurgerIcon } from "./MobileBurgerIcon";

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
          <li className="nav-li">
            <button>Projects</button>
          </li>
          <li className="nav-li">
            <button>Contact</button>
          </li>
          <li className="nav-li">
            <button>Story</button>
          </li>
        </ul>
      )}
      {!isDesktop && (
        <button className="menu-btn" onClick={handleSidebarToggle}>
          {/* <AiOutlineMenu style={{ pointerEvents: "none" }} /> */}
          <MobileBurgerIcon isSidebarOpen={isSidebarOpen} />
        </button>
      )}
    </nav>
  );
};
