import React, { useState } from "react";
import "./../scss/video.scss";
import PhotoVideo from "../images/video/index.jpg";
import ModelVideo from "./ModelVideo";
import { useTranslation } from 'react-i18next';

function Video() {

  const [showVideo,setShowVideo] = useState(false)
  const { t, i18n } = useTranslation();

  const toggleVideo = () => {
    setShowVideo(last=>last=!last)
  }
  
  return (
    <div className="video">

      <img src={PhotoVideo} alt="v" />
      <div className="box_video">
        <h2>{ t('video.h2') }</h2>
        <span className="span_title"></span>

        <h3 dangerouslySetInnerHTML={{ __html: t('video.h3') }}></h3>
        
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
