import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Locations.styled.css";

export default function Locations() {
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
        <h1>LOCATIONS</h1>
        <div className="address-container">
          <br />
          <p>112-52 GUY R BREWER BLVD</p>
          <p>JAMAICA</p>
          <p>NY 11433</p>
          <br />
          <p>PHONE: 718-521-0001</p>
          <p>FAX: 718-521-0011</p>
        </div>
        <img className="map" src="map_marked.png" />
      </div>
    );
  }
}
