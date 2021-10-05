import React from "react";

const Coin = ({ img, coinName, marketCaps, pricePerCoin }) => {
  return (
    <article className="coin">
      <img src={img} alt="" />
      <h1>{coinName}</h1>
      <h4>{marketCaps}</h4>
      <p>{pricePerCoin}</p>
    </article>
  );
};
export default Coin;
