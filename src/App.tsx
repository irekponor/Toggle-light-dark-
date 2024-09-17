import { useState } from "react";
import Content from "./Content";
import "./index.css";
import Navbar from "./Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  function toggledarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
