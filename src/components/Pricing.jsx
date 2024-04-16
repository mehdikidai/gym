import React from "react";
import "./../scss/pricing.scss";
import Config from "../config";

function Pricing() {
  const { prices , currency } = Config;
  
  return (
    <div className="pricing">

      {prices.map((el, i) => {
        return (
          <div className="card" key={i}>
            <span className="price_title">{el.name}</span>
            <h4 className="price">{ el.price} <span>{currency}</span></h4>
            <span className="price_title_2">{el.title}</span>
            <span className="line"></span>
            <p>
              {
                el.description
              }
            </p>
            <button>{el.btn}</button>
          </div>
        );
      })}
      
    </div>
  );
}

export default Pricing;
