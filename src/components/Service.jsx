import React from "react";
import "./../scss/service.scss";
import CardPhoto_1 from "./../images/services/card_1.jpg";
import CardPhoto_2 from "./../images/services/card_2.jpg";
import CardPhoto_3 from "./../images/services/card_3.jpg";
import Config from "../config";

function Service() {

  const { services } = Config;
  const imgs = [CardPhoto_1,CardPhoto_2,CardPhoto_3]

  const Cards = services.map((card) => {
    return (
      <div className="card" key={card.id}>
        <img src={imgs[card.id - 1]} alt="card" />
        <div className="card_title">
          <h4>{card.title}</h4>
        </div>
      </div>
    );
  });
  return (
    <div className="service">
      {
        Cards
      }
    </div>
  );
}

export default Service;
