import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/nav.css";

export const Nav = ({ isDesktop, setIsSidebarOpen, isSidebarOpen }) => {
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
        <button
          className="menu-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AiOutlineMenu style={{ pointerEvents: "none" }} />
        </button>
      )}
    </nav>
  );
};
