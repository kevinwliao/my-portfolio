import { useState } from "react";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default App;
