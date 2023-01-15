import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/nav.css";

export const Nav = ({ isDesktop, setIsSidebarOpen, isSidebarOpen }) => {
  const handleMenuBtn = () => {
    let sideBar = document.querySelector(".sidebar");
    // if (sideBar?.classList.contains("sb-closed")) {
    // sideBar?.classList.remove("sb-closed");
    // }
    if (isSidebarOpen) {
      sideBar?.classList.add("fade-out");
      setIsSidebarOpen(false);
    } else if (isSidebarOpen === false) {
      sideBar?.classList.add("fade-in");
      setIsSidebarOpen(true);
    }
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
        <button className="menu-btn" onClick={handleMenuBtn}>
          <AiOutlineMenu style={{ pointerEvents: "none" }} />
        </button>
      )}
    </nav>
  );
};
