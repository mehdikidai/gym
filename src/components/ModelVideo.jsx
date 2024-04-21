import React from "react";
import ReactPlayer from "react-player";
import "../scss/model_video.scss";
import { useSelector } from 'react-redux'

function ModelVideo({ toggleVideo }) {

  const videUrl  = useSelector(d=>d.videUrl)

  

  return (
    <div className="model_video" onClick={toggleVideo}>
      <div className="box">
        <ReactPlayer
          url={videUrl}
          width={"100%"}
          height={"100%"}
          playing={true}
          config={{
            youtube: {
              playerVars: { showinfo: 0 }
            }
          }}
        />
      </div>

      {/* <button className="close" onClick={toggleVideo}>
        <i className="material-symbols-outlined">close</i>
      </button> */}
    </div>
  );
}

export default ModelVideo;
