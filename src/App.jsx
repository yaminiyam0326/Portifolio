import React from "react";
import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
