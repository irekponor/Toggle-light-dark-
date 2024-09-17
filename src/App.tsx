import { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hii Peeps</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};

export default App;
