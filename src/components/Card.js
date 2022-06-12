import React from "react";
import "../scss/components/_card.scss";

function Card(props) {
  console.log(props);
  return (
    <li className="card-body">
      <div className="card-img">
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{props.series}</span>
          <span className="card-top">Top bid</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{props.title}</h4>
          <div className="card-price">
            <img src={require("../imges/eth1.png")} alt="super eth" />
            <h4>{props.price} ETH</h4>
          </div>
        </div>
        <div className="card-sub-details">
          <span>#{props.tag}</span>
          <span>{props.time} day left</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
