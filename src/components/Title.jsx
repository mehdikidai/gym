import React, { useEffect } from "react";
import "./../scss/title.scss";

function Title({ info }) {

  useEffect(()=>{
    console.log(info)
  },[])

  return (
    <div className="title_box" id={info.id}>
      <h2>{info.title_h2}</h2>
      <span className="span_title"></span>
      <h3 dangerouslySetInnerHTML={{ __html: info.title_h3 }}></h3>
    </div>
  );
}

export default Title;
