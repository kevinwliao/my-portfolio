import { useState } from "react";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Drawer from "./Drawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div id="projects">
        <Projects />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
