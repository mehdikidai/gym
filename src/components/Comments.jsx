import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./../scss/comments.scss";

function Comments() {
  const options = {
    perPage: 3,
    rewind : true,
    gap:'20px'
  };

  return (
    <div className="comments">
      <Splide options={options}>
        <SplideSlide>
          <div className="comment_box">
            <i className="material-symbols-outlined">format_quote</i>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              culpa debitis dolor ea voluptas!
            </span>
            <div className="avatar"><img src="https://mui.com/static/images/avatar/1.jpg" alt="user"/></div>
            <h3>user</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="comment_box">
            <i className="material-symbols-outlined">format_quote</i>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              culpa debitis dolor ea voluptas!
            </span>
            <div className="avatar"><img src="https://mui.com/static/images/avatar/1.jpg" alt="user"/></div>
            <h3>user</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="comment_box">
            <i className="material-symbols-outlined">format_quote</i>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              culpa debitis dolor ea voluptas!
            </span>
            <div className="avatar">
                <img src="https://mui.com/static/images/avatar/1.jpg" alt="user"/>
            </div>
            <h3>user</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="comment_box">
            <i className="material-symbols-outlined">format_quote</i>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              culpa debitis dolor ea voluptas!
            </span>
            <div className="avatar">
                <img src="https://mui.com/static/images/avatar/1.jpg" alt="user"/>
            </div>
            <h3>user</h3>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="comment_box">
            <i className="material-symbols-outlined">format_quote</i>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              
            </span>
            <div className="avatar">
                <img src="https://mui.com/static/images/avatar/1.jpg" alt="user"/>
            </div>
            <h3>user</h3>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Comments;
