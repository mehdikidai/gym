import React from "react";
import "./../scss/video.scss";
import PhotoVideo from "../images/video.jpg";

function Video() {
  return (
    <div className="video">
      <img src={PhotoVideo} alt="v" />
      <div className="box_video">
        <h2>Lorem, ipsum.</h2>
        <span className="span_title"></span>
        <h3>
          Lorem <span className="span_h3">ipsum</span>
        </h3>
        <button className="btn_play">
          <i className="material-symbols-outlined">play_arrow</i>
        </button>
      </div>
    </div>
  );
}

export default Video;
