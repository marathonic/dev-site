import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./components/MobileSidebar";
import { Projects } from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [currentScroll, setCurrentScroll] = useState("home");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isTablet = useMediaQuery({ query: "(min-width: 767px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App">
      <Nav
        isDesktop={isDesktop}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        currentScroll={currentScroll}
        setCurrentScroll={setCurrentScroll}
      />
      <MobileSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        currentScroll={currentScroll}
        setCurrentScroll={setCurrentScroll}
      />
      {/* {isSidebarOpen && <MobileSidebar />} */}
      <header className="App-header"></header>
      <Hero setCurrentScroll={setCurrentScroll} currentScroll={currentScroll} />
      <Projects
        isTablet={isTablet}
        isDesktop={isDesktop}
        setCurrentScroll={setCurrentScroll}
        currentScroll={currentScroll}
      />
      <About
        isTablet={isTablet}
        isDesktop={isDesktop}
        dynIconSize={dynIconSize}
        setCurrentScroll={setCurrentScroll}
        currentScroll={currentScroll}
      />
      <Contact
        isTablet={isTablet}
        isDesktop={isDesktop}
        dynIconSize={dynIconSize}
        setCurrentScroll={setCurrentScroll}
        currentScroll={currentScroll}
      />
    </div>
  );
}

export default App;
