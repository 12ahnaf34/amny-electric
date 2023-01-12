import { GiHamburgerMenu } from "react-icons/gi";
import type { Dispatch, SetStateAction } from "react";
import "./Navbar.styled.css";

interface NavbarProps {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar(props: NavbarProps) {
  const { showNav, setShowNav } = props;

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const sendEmail = () => {
    window.open("mailto:Info@amnyelectric.com");
  };

  if (showNav) {
    return (
      <div className="dropdown">
        <p className="close-navbar-btn" onClick={toggleNavbar}>
          X
        </p>
        <a className="dropdown-link" href="/">
          HOME
        </a>
        <a className="dropdown-link" href="/specializations">
          SPECIALIZATIONS
        </a>
        <a className="dropdown-link" href="/locations">
          LOCATIONS
        </a>
      </div>
    );
  } else {
    return (
      <div className="navbar-container">
        <img onClick={toggleNavbar} src="/sidebar.svg" className="sidebar-icon" />
        <div className="standard-links">
          <a href="/">HOME</a>
          <a href="/specializations">SPECIALIZATIONS</a>
          <a href="/locations">LOCATIONS</a>
        </div>
        <img className="email-icon" src="/email.svg" onClick={sendEmail} />
      </div>
    );
  }
}
