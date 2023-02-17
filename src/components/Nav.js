import React from "react";
import "../styles/nav.css";
import { MobileBurgerIcon } from "./MobileBurgerIcon";

export const Nav = ({
  isDesktop,
  setIsSidebarOpen,
  isSidebarOpen,
  scrollToSection,
}) => {
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
            <button
              className="nav-desktop-btn"
              id="nv-home"
              onClick={scrollToSection}
            >
              Home
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-desktop-btn"
              id="nv-proj"
              onClick={scrollToSection}
            >
              Projects
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-desktop-btn"
              id="nv-about"
              onClick={scrollToSection}
            >
              About
            </button>
          </li>
          <li className="nav-li">
            <button
              className="nav-desktop-btn"
              id="nv-contact"
              onClick={scrollToSection}
            >
              Contact
            </button>
          </li>
        </ul>
      )}
      {!isDesktop && (
        <button className="menu-btn" onClick={handleSidebarToggle}>
          <MobileBurgerIcon isSidebarOpen={isSidebarOpen} />
        </button>
      )}
    </nav>
  );
};
