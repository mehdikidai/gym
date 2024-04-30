import React, { useState } from "react";
import "./../scss/pricing.scss";
import Config from "../config";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import FormPricing from "./FormPricing";
import { fadeInAnimation } from "./../motion"

function Pricing() {
    const [plan, setPlan] = useState(null);
    const { currency } = Config;
    const { t, i18n } = useTranslation();

    const handlPlan = (e) => {
        setPlan(e);
        console.log("ggg");
    };

    return (
        <div className="pricing">
            <AnimatePresence>
                {plan && <FormPricing planId={plan} handlPlan={handlPlan} />}
            </AnimatePresence>

            {t("prices.data", { returnObjects: true }).map((el, i) => {
                return (
                    <motion.div
                        className="card"
                        key={i}
                        variants={fadeInAnimation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={i}
                    >
                        <span className="price_title">{el.title_one}</span>
                        <h4
                            className="price"
                            style={{
                                direction:
                                    i18n.language === "ar" ? "rtl" : "ltr",
                            }}
                        >
                            {el.price} <span>{currency}</span>
                        </h4>
                        <span className="price_title_2">{el.title_two}</span>
                        <span className="line"></span>
                        <p>{el.body}</p>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setPlan(el.id)}
                        >
                            {t("prices.btn_join_new")}
                        </motion.button>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Pricing;
