import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Education from "@/components/Education";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
