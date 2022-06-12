import React from "react";
import "../scss/layout/_free.scss";
import Card from "./Card";

function Free() {
  const cardsInfo = [
    {
      image: require("../imges/super1.png"),
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: require("../imges/super4.png"),
      series: "Gloop Series",
      title: "Purple Man",
      price: 3.95,
      tag: 1094,
      time: 2,
    },
  ];

  let cards = cardsInfo.map(function (card) {
    return <Card {...card} />;
  });

  return (
    <div className="free">
      <div className="container">
        <div className="free-content">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
          <div className="free-text">
            <img src={require("../imges/icon.png")} alt="free Icon" />
            <h1 className="free-heading">Free NFT for early birds</h1>
            <p>Sign up today and you'll get a free NFT when we launch</p>
          </div>
        </div>
        <ul className="free-card-container">{cards}</ul>
      </div>
    </div>
  );
}

export default Free;
