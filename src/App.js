import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./components/MobileSidebar";
import { Projects } from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isTablet = useMediaQuery({ query: "(min-width: 767px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  let bigSize = null;
  if (isTablet && !isDesktop) {
    bigSize = 100;
  } else if (isDesktop) {
    bigSize = 70;
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
      />
      {/* {isSidebarOpen && <MobileSidebar />} */}
      <header className="App-header"></header>
      <Hero />
      <Projects isTablet={isTablet} isDesktop={isDesktop} />
      <About
        isTablet={isTablet}
        isDesktop={isDesktop}
        dynIconSize={dynIconSize}
      />
      <Contact isTablet={isTablet} isDesktop={isDesktop} />
    </div>
  );
}

export default App;
