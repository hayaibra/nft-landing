import React from "react";
import "../scss/layout/_client.scss";

function Clients() {
  return (
    <div className="clients">
      <div className="container">
        <ul className="clients-content">
          <li className="clients-item">
            <img src={require("../imges/clients1.png")} alt="" />
          </li>
          <li className="clients-item">
            <img src={require("../imges/clients2.png")} alt="" />
          </li>
          <li className="clients-item">
            <img src={require("../imges/clients3.png")} alt="" />
          </li>
          <li className="clients-item">
            <img src={require("../imges/clients4.png")} alt="" />
          </li>
          <li className="clients-item">
            <img src={require("../imges/clients5.png")} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Clients;
