import React from "react";
import "../scss/layout/_Header.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

function Header({ toggle, dark }) {
  const [click, setClick] = React.useState(false);

  function handleClick() {
    setClick(!click);
  }

  function closeSidebar() {
    setClick(false);
  }

  return (
    <>
      <nav className={`nav ${dark ? "dark-bg" : "white-bg"}`}>
        <div className="container">
          <Link to="/" className="nav-logo">
            <img
              src={require("../imges/logo.png")}
              style={{ filter: !dark && "brightness(0)" }}
              alt="logo"
            />
          </Link>
          <div className="nav-content">
            <ul className={click ? "nav-menu-mobile" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/features"
                  className="nav-link"
                  onClick={closeSidebar}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeSidebar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/launch" className="nav-link" onClick={closeSidebar}>
                  Launch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-link" onClick={closeSidebar}>
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="nav-light-mood" onClick={toggle}>
              {dark ? (
                <ImSun className="yellow" />
              ) : (
                <BsFillMoonFill className="white" />
              )}
            </div>
            <div
              className={`mobile-icon ${dark ? "light-icon" : "dark-icon"}`}
              onClick={handleClick}
            >
              {click ? (
                <FaTimes className="icon" />
              ) : (
                <FaBars className="icon" />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
