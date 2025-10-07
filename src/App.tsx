import { content } from "./data/content";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="app-root"
        className="bg-zinc-800 light:bg-slate-200 text-purple-400 light:text-stone-900 min-h-screen w-full print:bg-white print:text-black"
      >
        <Navbar />
        <About about={content.about} />
        <Contact contact={content.contact} />
        <Skills skills={content.skills.items} />
        <Projects projects={content.projects} />
      </div>
    </>
  );
}

export default App;
