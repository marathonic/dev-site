import React from "react";
import "../styles/mobileBurgerIcon.css";

export const MobileBurgerIcon = ({ isSidebarOpen }) => {
  // if (isSidebarOpen) {
  //   let line1 = document.querySelector(".line1");
  //   line1?.classList.add("open");
  // }

  return (
    <button className="burger-container">
      {/* <div className="burger-line line1"></div> */}
      {/* <div className="burger-line line2"></div> */}
      {/* <div className="burger-line line3"></div> */}
      <div id="nav-icon4" className={isSidebarOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
