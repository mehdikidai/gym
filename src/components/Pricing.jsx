import React, { useState } from "react";
import "./../scss/pricing.scss";
import Config from "../config";
import { useTranslation } from "react-i18next";
import { useScroll, motion } from "framer-motion";
import FormPricing from "./FormPricing";

function Pricing() {
    
    const [plan, setPlan] = useState(null);
    const { currency } = Config;
    const { t } = useTranslation();
    

    const handlPlan = (e) => {
        setPlan(e);
    };

    return (
        <div className="pricing">
            {plan && <FormPricing planId={plan} handlPlan={handlPlan} />}

            {t("prices.data", { returnObjects: true }).map((el, i) => {
                return (
                    <motion.div className="card" key={i}>
                        <span className="price_title">{el.title_one}</span>
                        <h4 className="price">
                            {el.price} <span>{currency}</span> <small> / Mois</small>
                        </h4>
                        <span className="price_title_2">{el.title_two}</span>
                        <span className="line"></span>
                        <p>{el.body}</p>
                        <button onClick={() => setPlan(el.id)}>
                            {t("prices.btn_join_new")}
                        </button>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Pricing;
