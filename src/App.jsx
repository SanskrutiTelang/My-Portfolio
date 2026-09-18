// export default App
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;