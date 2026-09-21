import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsCoverflow from "./components/ProjectsCoverflow";
import GithubMarquee from "./components/GithubMarquee";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import MusicToggle from "./components/MusicToggle";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();

  useEffect(() => {
    document.body.classList.add("grain");
    return () => document.body.classList.remove("grain");
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsCoverflow />
      <GithubMarquee />
      <Certifications />
      <Contact />
      <MusicToggle />
    </>
  );
}

export default App;
