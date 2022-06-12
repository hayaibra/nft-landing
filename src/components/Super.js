import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../scss/layout/_super.scss";

function Super({ toggle, dark }) {
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
      image: require("../imges/super2.png"),
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: require("../imges/super3.png"),
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: require("../imges/super4.png"),
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];

  let cards = cardsInfo.map(function (card) {
    return <Card {...card} />;
  });

  return (
    <div className="super">
      <div className="container">
        <h1 className={`super-heading ${dark ? "white-title" : "dark-title"}`}>
          Le Super Rare Auction
        </h1>
        <p className={dark ? "white-title" : "dark-title"}>
          We have released four limited edition NFT's early which which can be
          bid on via <Link to="https://opensea.io/">OpenSea</Link>.
        </p>
        <ul className="super-card-container">{cards}</ul>
      </div>
    </div>
  );
}

export default Super;
