import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { MobileSidebar } from "./components/MobileSidebar";
import { Projects } from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isTablet = useMediaQuery({ query: "(min-width: 767px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  let projectsRef,
    aboutRef,
    contactRef = useRef();
  let bigSize = null;
  if (isTablet && !isDesktop) {
    bigSize = 80;
  } else if (isDesktop) {
    bigSize = 100;
  }
  let dynIconSize = bigSize ? bigSize : 50;

  useEffect(() => {
    const toggleOverflow = () => {
      let body = document.body;
      if (isSidebarOpen) {
        body?.classList.add("lock-scroll");
        return;
      }
      if (!isSidebarOpen) {
        body?.classList.remove("lock-scroll");
        return;
      }
    };
    toggleOverflow();
  }, [isSidebarOpen]);

  return (
    <div className="App">
      <Nav
        isDesktop={isDesktop}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      {/* {isSidebarOpen && <MobileSidebar />} */}
      <header className="App-header"></header>
      <Hero />
      <Projects
        isTablet={isTablet}
        isDesktop={isDesktop}
        projectsRef={projectsRef}
      />
      <About
        isTablet={isTablet}
        isDesktop={isDesktop}
        dynIconSize={dynIconSize}
        aboutRef={aboutRef}
      />
      <Contact
        isTablet={isTablet}
        isDesktop={isDesktop}
        dynIconSize={dynIconSize}
        contactRef={contactRef}
      />
    </div>
  );
}

export default App;
