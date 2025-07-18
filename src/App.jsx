import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    
      <Navbar />
      <div className="h-[400vh] relative scroll-smooth">
        <About />
        <Project />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default App;
