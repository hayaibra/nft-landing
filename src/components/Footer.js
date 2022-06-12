import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../scss/layout/_footer.scss";

function Footer({ toggle, dark }) {
  const [visible, setVisible] = React.useState(false);

  const show = () => {
    window.scrollY > 100 ? setVisible(true) : setVisible(false);
  };

  React.useEffect(() => {
    show();
  }, []);

  window.addEventListener("scroll", show);

  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer>
      <div className="container">
        <div className="upper-footer">
          <div className="footer-content">
            <img
              src={require("../imges/logo.png")}
              style={{ filter: !dark && "brightness(0)" }}
              alt=""
            />
            <p className="footre-icons-heading">Exclusive NFT Collection </p>
            <ul className="footer-icons">
              <li>
                <Link className="footer-icon" to="/">
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link className="footer-icon" to="/">
                  <BsTwitter />
                </Link>
              </li>
              <li>
                <Link className="footer-icon" to="/">
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link className="footer-icon" to="/">
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu-content">
            <div className="footer-items-box">
              <h4 className={dark ? "light-title" : "dark-title"}>ABOUT</h4>
              <ul className="footer-items">
                <li className="footer-item">
                  <Link className="footer-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Terms
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-items-box">
              <h4 className={dark ? "light-title" : "dark-title"}>NFT</h4>
              <ul className="footer-items">
                <li className="footer-item">
                  <Link className="footer-link" to="https://opensea.io/">
                    OpenSea
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Maker
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Learn
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-items-box">
              <h4 className={dark ? "light-title" : "dark-title"}>CONTACT</h4>
              <ul className="footer-items">
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Press
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-items-box">
              <h4 className={dark ? "light-title" : "dark-title"}>SOCIAL</h4>
              <ul className="footer-items">
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Twitter
                  </Link>
                </li>
                <li className="footer-item">
                  <Link className="footer-link" to="/">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <span className="right">&copy; Copyright 2022 NFT</span>
          <span className="launch">Launching March 2022</span>
        </div>
        <div
          className={`scroll-top ${visible ? "visible" : ""} ${
            dark ? "dark-scroll" : "light-scroll"
          }`}
          onClick={handleClick}
        >
          <Link to="/" className="scroll-link">
            <BsChevronUp
              style={{
                fontSize: "30px",
                transform: "translate(-50%, -50%)",
                position: "absolute",
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
