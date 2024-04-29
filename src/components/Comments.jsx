import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "./../scss/comments.scss";
import commentsData from "../config/comments.json";
import { MdiFormatQuoteClose } from "./../icons/Icon";

function Comments() {
    const [commentsJson, SetCommentsJson] = useState(commentsData);
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        direction: "rtl",
        gap: "20px",
        autoScroll: {
            speed: 1,
        },
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
    };

    useEffect(() => {
        console.log(commentsData);
    }, []);

    return (
        <div className="comments">
            <Splide options={options} extensions={{ AutoScroll }}>
                {commentsJson.map((el, i) => {
                    return (
                        <SplideSlide key={i}>
                            <div className="comment_box">
                                <i>
                                    <MdiFormatQuoteClose />
                                </i>
                                <p>{el.body}</p>

                                <div className="avatar">
                                    <h3>{el.name}</h3>
                                    <img src={el.photo} alt="user" />
                                </div>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default Comments;
