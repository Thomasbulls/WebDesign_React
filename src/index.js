import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
import { coins } from "./coins";
import Coin from "./Coin";

//Using Array method to list the coins

function CoinList() {
  return (
    <section className="coinlist">
      {coins.map(coin => {
        return <Coin coin={coin.id} {...coin}></Coin>;
      })}
    </section>
  );
}

ReactDom.render(<CoinList />, document.getElementById("root"));
