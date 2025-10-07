import { content } from "./data/content";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <About about={content.about}></About>
    </>
  );
}

export default App;
