import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Studies from "./components/Studies";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Studies></Studies>
      <Contact></Contact>
    </>
  );
}

export default App;
