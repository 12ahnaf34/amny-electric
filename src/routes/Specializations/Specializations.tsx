import { useState } from "react";
import "./Specializations.styled.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Specializations() {
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
        <h1 className="title">SPECIALIZATIONS</h1>
        <div className="list">
          <div className="item-container">
            <img className="item-img" src="/wiring.png" />
            <span className="item-text">Electrical Wiring</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/operator.png" />
            <span className="item-text">Troubleshooting</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/toolkit.png" />
            <span className="item-text">Maintenance</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/toolbox.png" />
            <span className="item-text">Repairs</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/construction.png" />
            <span className="item-text">New Construction</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/fire-alarm.png" />
            <span className="item-text">Fire Alarm Installation</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/lighting.png" />
            <span className="item-text">Lighting and Control Systems</span>
          </div>
          <div className="item-container">
            <img className="item-img" src="/generator.png" />
            <span className="item-text">Generator Installation</span>
          </div>
        </div>
        <div className="footer">
          <a className="attribution" href="https://www.flaticon.com/free-icons/help" title="help icons">
            Icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    );
  }
}
