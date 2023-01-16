import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { MobileSidebar } from "./components/MobileSidebar";
import { Projects } from "./components/Projects";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

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
