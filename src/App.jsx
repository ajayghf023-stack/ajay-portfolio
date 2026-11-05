import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MissionConsole from "./components/MissionConsole";

import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <MissionConsole />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;