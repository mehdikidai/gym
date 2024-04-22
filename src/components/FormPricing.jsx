import React, { useEffect, useState } from "react";

import "./../scss/form_pricing.scss";
import { useTranslation } from "react-i18next";
import config from "../config";

function FormPricing({ planId, handlPlan }) {
    const [plan, setPlan] = useState(null);

    const [dataForm, setDataForm] = useState({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        day: "",
        month: "",
        year: "",
    });

   

    const { t } = useTranslation();
    const { currency } = config;

    useEffect(() => {
        const p = t("prices.data", { returnObjects: true }).filter(
            (pl) => pl.id === planId
        );

        setPlan(p[0]);
    }, []);

    return (
        plan !== null && (
            <div className="form_pricing">
                <div className="form_input">
                    <button className="close" onClick={() => handlPlan(null)}>
                        <i className="material-symbols-outlined">close</i>
                    </button>
                    <h2 style={{ color: "#fff" }}>{plan.title_two}</h2>
                    <form className="plan" action="#" method="post">
                        <div className="box">
                            <label>
                                {" "}
                                <i className="material-symbols-outlined">
                                    person
                                </i>{" "}
                                first name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="first name"
                            />
                        </div>
                        <div className="box">
                            <label>
                                {" "}
                                <i className="material-symbols-outlined">
                                    person
                                </i>{" "}
                                last name
                            </label>
                            <input
                                type="text"
                                name="l_name"
                                id="name"
                                placeholder="last name"
                            />
                        </div>
                        <div className="box box_phone">
                            <label>
                                {" "}
                                <i className="material-symbols-outlined">
                                    call
                                </i>{" "}
                                phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="phone"
                            />
                        </div>
                        <div className="box box_email">
                            <label>
                                {" "}
                                <i className="material-symbols-outlined">
                                    mail
                                </i>{" "}
                                email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="box">
                            <label>
                                {" "}
                                <i className="material-symbols-outlined">
                                    person
                                </i>{" "}
                                Date of Birth
                            </label>
                            <div className="inputs_date">
                                <input
                                    type="number"
                                    name="day"
                                    id="input_day"
                                    placeholder="day"
                                />
                                <input
                                    type="number"
                                    name="month"
                                    id="input_month"
                                    placeholder="month"
                                />
                                <input
                                    type="number"
                                    name="year"
                                    id="input_year"
                                    placeholder="year"
                                />
                            </div>
                        </div>
                        

                        <div className="box box_submit">
                           <button type="submit">send</button>
                           <button type="reset">reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default FormPricing;
