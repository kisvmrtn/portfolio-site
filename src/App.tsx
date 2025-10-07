import { content } from "./data/content";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="app-root"
        className="bg-zinc-800 light:bg-slate-200 min-h-screen w-full"
      >
        <Navbar />
        <About about={content.about} />
        <Contact contact={content.contact} />
        <Skills skills={content.skills.items} />
      </div>
    </>
  );
}

export default App;
