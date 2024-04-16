import React, { useState } from "react";
import "./../scss/video.scss";
import PhotoVideo from "../images/video/index.jpg";

import ModelVideo from "./ModelVideo";

function Video() {

  const [showVideo,setShowVideo] = useState(false)

  const toggleVideo = () => {
    setShowVideo(last=>last=!last)
  }
  
  return (
    <div className="video">

      <img src={PhotoVideo} alt="v" />
      <div className="box_video">
        <h2>Lorem, ipsum.</h2>
        <span className="span_title"></span>
        <h3>
          Lorem <span className="span_h3">ipsum</span>
        </h3>
        <button onClick={toggleVideo} className="btn_play">
          <i className="material-symbols-outlined">play_arrow</i>
        </button>
      </div>

      {
        showVideo &&  <ModelVideo toggleVideo={toggleVideo}/>
      }

     
      
    </div>
  );
}

export default Video;
