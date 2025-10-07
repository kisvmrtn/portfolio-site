import { content } from "./data/content";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="app-root"
        className="bg-zinc-800 light:bg-slate-200 h-screen w-full"
      >
        <Navbar />
        <About about={content.about} />
      </div>
    </>
  );
}

export default App;
