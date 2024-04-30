import React, { useEffect, useRef } from "react";
import "./../scss/working_timings.scss";
import { dayOfWeek } from "./../helpers";
import Config from "./../config";
import { useTranslation } from "react-i18next";
import { MynauiArrowLongRight, MynauiArrowLongLeft } from "./../icons/Icon";
import { delay, motion } from "framer-motion";

function WorkingTimings() {
    const days = useRef();

    const { daysGym } = Config;

    const { t, i18n } = useTranslation();

    const fadeInAnimation = {
        initial: { y: 100 ,opacity: 0},
        animate: () => {
            return {
                y: 0,
                opacity: 1,
                transition: {
                    delay: 0.02,
                },
            };
        },
    };

    useEffect(() => {
        days.current.querySelectorAll("tr").forEach((element) => {
            element.dataset.day.toLowerCase() === dayOfWeek() &&
                element.classList.add("active");
        });
    }, []);

    const DaysHtml = daysGym.map((day, i) => {
        return (
            day.entryTime !== "" && (
                <motion.tr
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    data-day={day.name}
                    key={i}
                >
                    <td>{t("days." + day.name)}</td>
                    <td>{day.entryTime}</td>
                    <td className="arrow_right">
                        {i18n.language === "ar" ? (
                            <MynauiArrowLongLeft className="icon" />
                        ) : (
                            <MynauiArrowLongRight className="icon" />
                        )}
                    </td>
                    <td>{day.exitTime}</td>
                </motion.tr>
            )
        );
    });

    return (
        <div className="working_timings">
            <div className="table_timings">
                <table>
                    <thead>
                        <tr>
                            <th>Days</th>
                            <th>From</th>
                            <th className="arrow_right">
                                <i className="material-symbols-outlined">
                                    arrow_right_alt
                                </i>
                            </th>
                            <th>To</th>
                        </tr>
                    </thead>

                    <tbody ref={days}>{DaysHtml}</tbody>
                </table>
            </div>
        </div>
    );
}

export default WorkingTimings;
