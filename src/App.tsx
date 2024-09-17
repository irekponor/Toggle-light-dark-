import useLocalStorage from "use-local-storage";
import "./App.css";
import Toggle from "./components/Toggle";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">
        Hii Peeps <p>Did you know?</p>
      </h1>
      <div className="box">
        <li> Butterflies taste with their feet.</li>
        <li>
          The shortest war in history was between Britain and Zanzibar on August
          27, 1896, and lasted only 38 minutes.
        </li>
        <li> The human nose can detect over 1 trillion different scents.</li>
        <li>
          The world's largest living organism is a fungus that covers over 2,200
          acres in Oregon, USA.
        </li>
        <li> The longest recorded flight of a chicken is 13 seconds.</li>
      </div>
    </div>
  );
};

export default App;
