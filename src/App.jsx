import { useState } from "react";
// import reactLogo from './assets/react.svg'
import { HiChevronUp } from "react-icons/hi2";
import viteLogo from "/vite.svg";
import Accardion from "../Component/Accardion.jsx"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Accardion />
    </div>
  );
}

export default App;
