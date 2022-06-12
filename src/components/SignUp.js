import React from "react";
import "../scss/layout/_signup.scss";

function SignUp({ toggle, dark }) {
  return (
    <div className="sign-up">
      <div className="container">
        <div className="sign-text">
          <p className="sign-subtitle">LAUNCHING SOON</p>
          <h1 className={`sign-title ${dark ? "white-title" : "dark-title"}`}>An NFT like no other </h1>
          <p className="sign-subsicribe">
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
            <img src={require("../imges/signup.png")} alt="hero NFT" />
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

export default SignUp;
