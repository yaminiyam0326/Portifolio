import React from "react";
import Navbar from "./assets/Components/Navbar";
import Hero from "./assets/Components/Hero";
import About from "./assets/Components/About";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";


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
