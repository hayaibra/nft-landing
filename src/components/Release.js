import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";
import "../scss/layout/_release.scss";
import { Link } from "react-router-dom";

function Release() {
  return (
    <div className="release">
      <div className="container">
        <div className="release-box">
          <div className="release-text">
            <h2 className="title">Initial Release 4/11</h2>
            <p className="description">
              We have released four limited edition NFTs early which can be bid
              on via <Link to="https://opensea.io/">OpenSea</Link>
            </p>
            <p className="description">
              There will be the only four of these NFTs we ever make, so be sure
              not to miss out!
            </p>
            <p className="description">50% of proceeds go to charity.</p>
            <Link to="#" className="link">
              Check them out <BsArrowRight className="arrow" />
            </Link>
          </div>
          <div className="release-img">
            <img src={require("../imges/release1.png")} alt="release-img" />
          </div>
          <div className="ellipse pink"></div>
        </div>
        <div className="release-box">
          <div className="release-card">
            <Card 
              image={require("../imges/release2.png")}
              series="Gloop Series"
              title="Purple Man"
              price={3.95}
              tag="1094"
              time={2}
            />
            <div className="ellipse orange"></div>
          </div>
          <div className="release-text">
            <h2 className="title">Initial Release 4/11</h2>
            <p className="description">
              We have released four limited edition NFTs early which can be bid
              on via <Link to="https://opensea.io/">OpenSea</Link>
            </p>
            <p className="description">
              There will be the only four of these NFTs we ever make, so be sure
              not to miss out!
            </p>
            <p className="description">50% of proceeds go to charity.</p>
            <Link to="#" className="link">
              Check them out <BsArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Release;
