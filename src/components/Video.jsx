import React, { useState } from "react";
import "./../scss/video.scss";
import PhotoVideo from "../images/video/index.jpg";
import ModelVideo from "./ModelVideo";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


function Video() {
    const [showVideo, setShowVideo] = useState(false);
    const { t } = useTranslation();

    const toggleVideo = () => {
        setShowVideo((last) => (last = !last));
    };

    return (
        <div className="video">
            <img src={PhotoVideo} alt="v" />
            <div className="box_video">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{delay:0.5,duration: 0.5}}
                >
                    {t("video.h2")}
                </motion.h2>
                <span className="span_title"></span>

                <motion.h3
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{delay:0.01,duration: 0.5}}
                    dangerouslySetInnerHTML={{ __html: t("video.h3") }}
                ></motion.h3>

                <button onClick={toggleVideo} className="btn_play">
                    <i className="material-symbols-outlined">play_arrow</i>
                </button>
            </div>

            {showVideo && <ModelVideo toggleVideo={toggleVideo} />}
        </div>
    );
}

export default Video;
