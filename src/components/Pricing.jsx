import React from "react";
import "./../scss/pricing.scss";
import Config from "../config";
import { useTranslation } from 'react-i18next';
import { useScroll,motion } from "framer-motion"

function Pricing() {

  const { currency } = Config;
  const { t } = useTranslation();
  const { scrollY } = useScroll()

  
  
  return (
    <div className="pricing">

      {t('prices.data',{returnObjects:true}).map((el, i) => {
        return (
          <motion.div className="card" key={i}>
            <span className="price_title">{el.title_one}</span>
            <h4 className="price">{ el.price} <span>{currency}</span></h4>
            <span className="price_title_2">{el.title_two}</span>
            <span className="line"></span>
            <p>
              {
                el.body
              }
            </p>
            <button>{t('prices.btn_join_new')}</button>
          </motion.div>
        );
      })}
      
    </div>
  );
}

export default Pricing;
