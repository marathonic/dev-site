import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Nav = ({ isDesktop }) => {
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
        <button className="menu-btn">
          <AiOutlineMenu style={{ pointerEvents: "none" }} />
        </button>
      )}
    </nav>
  );
};
