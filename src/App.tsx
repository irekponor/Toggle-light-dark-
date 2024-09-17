import { useState } from "react";
import Content from "./Content";
import "./index.css";
import Navbar from "./Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
