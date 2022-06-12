import React from "react";
import "../scss/layout/_like.scss";

function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="like-box">
          <img src={require("../imges/eth1.png")} alt="" />
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
        <div className="like-box">
          <img src={require("../imges/eth2.png")} alt="" />
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Like;
