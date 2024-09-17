import { useState } from "react";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <h1 className="title">Hii Peeps</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};

export default App;
