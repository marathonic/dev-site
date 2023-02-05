import React, { useState } from "react";
// import "../yorha.css";
import "../styles/mobileSidebar.css";

export const MobileSidebar = ({
  isSidebarOpen,
  handleSidebarToggle,
  setIsSidebarOpen,
}) => {
  let option1 = document.querySelector(".current-link");

  const [isSelected, setIsSelected] = useState(null);

  function selectLink(e) {
    // const shit = document.querySelector(".sidebar-ul");
    // const clickedListItem = e.target;
    // clickedListItem.classList.add("testing-shit");
    console.log("clicked this link ==>", e.target.id);
  }
  // delete this below ~~
  const allBtns = document.querySelectorAll(".side-btn");
  allBtns?.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e.target.id);
    });
  });
  // delete this above ~~~

  const handleClick = (e) => {
    // if same page, return
    let clicked = e.target;
    // if (clicked.classList.contains("current-link")) return;
    let onPage = document.querySelector(".current-link");
    let onPageText = onPage.textContent;
    console.log(onPage.textContent);
    console.log(clicked.id.substring(3));
    let clickedId = clicked.id.substring(3).toLowerCase();
    if (clickedId === onPageText) {
      return;
    }
    if (clicked.classList.contains("current-link")) return;
    clicked.classList.add("side-btn");
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 700);
    return;
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-container fade-in">
            <ul className="sidebar-ul" id="shit-id-test">
              <li className="test-border current-link">
                <div className="test-border-inner current-link">
                  <button
                    className="current-link "
                    id="sb-home"
                    onClick={handleClick}
                  >
                    Home
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button className="" id="sb-proj" onClick={handleClick}>
                    Projects
                  </button>
                </div>
              </li>
              <li className="test-border">
                <div className="test-border-inner">
                  <button className="" id="sb-about" onClick={handleClick}>
                    About
                  </button>
                </div>
              </li>
            </ul>
            <div className="sidebar-contact">
              <button className="sb-contact-box">Call</button>
              <button className="sb-contact-box">Message</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
