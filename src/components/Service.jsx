import React from "react";
import "./../scss/service.scss";
import CardPhoto_1 from "./../images/services/card_1.jpg";
import CardPhoto_2 from "./../images/services/card_2.jpg";
import CardPhoto_3 from "./../images/services/card_3.jpg";
import { useTranslation } from 'react-i18next';

function Service() {

  
  const imgs = [CardPhoto_1,CardPhoto_2,CardPhoto_3]
  const { t } = useTranslation();
  
  const Cards = t('services.service list',{returnObjects:true}).map((card,i) => {
    return (
      <div className="card" key={i}>
        <img src={imgs[i]} alt="card" />
        <div className="card_title">
          <h4>{card}</h4>
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
