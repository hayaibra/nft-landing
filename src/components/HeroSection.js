import React from "react";
import "../scss/layout/_HeroSection.scss";

function HeroSection({ toggle, dark }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <p className="hero-subtitle">LAUNCHING SOON</p>
          <h1 className={`hero-title ${dark ? "white-title" : "dark-title"}`}>
            An NFT like no other
          </h1>
          <p className={`hero-subsicribe ${dark ? "white-sub" : "dark-sub"}`}>
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
          <div className="btn-box">
            <button className={`btn ${dark ? "dark-btn" : "white-btn"}`}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={require("../imges/home.png")} alt="hero NFT" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
