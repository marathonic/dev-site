import { Nav } from "./components/Nav";
import Hero from "./components/Hero";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <div className="App">
      <Nav isDesktop={isDesktop} />
      <header className="App-header"></header>
      <Hero />
    </div>
  );
}

export default App;
