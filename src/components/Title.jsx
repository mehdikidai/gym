import React, { useEffect } from "react";
import "./../scss/title.scss";

function Title({ tit }) {

  const { title, small_title } = tit;

  return (
    <div className="title_box">
      <h2>{small_title}</h2>
      <span className="span_title"></span>
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
    </div>
  );
}

export default Title;
