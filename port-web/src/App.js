import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css" // aos is used for animation

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
