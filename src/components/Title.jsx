import React, { useEffect } from "react";
import "./../scss/title.scss";
import { motion } from "framer-motion";

function Title({ info }) {
    useEffect(() => {
        console.log(info);
    }, []);

    return (
        <div className="title_box" id={info.id}>
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                {info.title_h2}
            </motion.h2>
            <motion.span
                initial={{ opacity: 0,x:100 }}
                whileInView={{ opacity: 1 ,x:0}}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="span_title"
            ></motion.span>
            <motion.h3
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: [0, 20, 0], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
                dangerouslySetInnerHTML={{ __html: info.title_h3 }}
            ></motion.h3>
        </div>
    );
}

export default Title;
