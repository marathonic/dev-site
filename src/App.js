import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./components/MobileSidebar";
import { Projects } from "./components/Projects";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

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
      <MobileSidebar isSidebarOpen={isSidebarOpen} />
      {/* {isSidebarOpen && <MobileSidebar />} */}
      <header className="App-header"></header>
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
