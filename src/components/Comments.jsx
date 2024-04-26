import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "./../scss/comments.scss";

function Comments() {
    const options = {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        direction: "rtl",
        gap:"40px",
        autoScroll: {
            speed: 1,
        },
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
    };

    return (
        <div className="comments">
            <Splide options={options} extensions={{ AutoScroll }}>
                <SplideSlide>
                    <div className="comment_box">
                        <i className="material-symbols-outlined">
                            format_quote
                        </i>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vero culpa debitis dolor ea voluptas!
                        </span>
                        <h3>user</h3>
                        <div className="avatar">
                            <img
                                src="https://mui.com/static/images/avatar/1.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="comment_box">
                        <i className="material-symbols-outlined">
                            format_quote
                        </i>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vero culpa debitis dolor ea voluptas!
                        </span>
                        <h3>user</h3>
                        <div className="avatar">
                            <img
                                src="https://mui.com/static/images/avatar/1.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="comment_box">
                        <i className="material-symbols-outlined">
                            format_quote
                        </i>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vero culpa debitis dolor ea voluptas!
                        </span>
                        <h3>user</h3>
                        <div className="avatar">
                            <img
                                src="https://mui.com/static/images/avatar/1.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="comment_box">
                        <i className="material-symbols-outlined">
                            format_quote
                        </i>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vero culpa debitis dolor ea voluptas!
                        </span>
                        <h3>user</h3>
                        <div className="avatar">
                            <img
                                src="https://mui.com/static/images/avatar/1.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="comment_box">
                        <i className="material-symbols-outlined">
                            format_quote
                        </i>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Vero
                        </span>
                        <h3>user</h3>
                        <div className="avatar">
                            <img
                                src="https://mui.com/static/images/avatar/1.jpg"
                                alt="user"
                            />
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Comments;
