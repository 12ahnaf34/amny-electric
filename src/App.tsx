import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showNav, setShowNav] = useState<boolean>(false);

  if (showNav) {
    return (
      <div className="main-container">
        <Navbar showNav={showNav} setShowNav={setShowNav} />
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Landing />
      </div>
    );
  }
}

export default App;
