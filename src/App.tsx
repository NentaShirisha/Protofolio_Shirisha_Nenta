import { useCallback, useEffect, useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubMarquee from "./components/GithubMarquee";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import MusicToggle from "./components/MusicToggle";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("grain");
    return () => document.body.classList.remove("grain");
  }, []);

  // Releases the paused hero entrance animations once the intro is gone.
  const finishLoading = useCallback(() => {
    document.documentElement.classList.add("ready");
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onDone={finishLoading} />}
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main className="relative z-[1]">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <GithubMarquee />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <MusicToggle />
    </>
  );
}

export default App;
