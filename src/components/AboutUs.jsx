import React from "react";
import "./../scss/about.scss";
import PhotoAbout from "../images/about/index.jpg";
import Config from "../config";

function AboutUs() {
  const { about } = Config;
  return (
    <div className="AboutAs">
      <div className="box_1 box">
        <img src={PhotoAbout} alt="test" />
      </div>
      <div className="box_2 box">
        <div className="title_about">
          <span></span>
          <h2>About</h2>
        </div>
        <h3 dangerouslySetInnerHTML={{ __html: about.title }}></h3>
        <p>
          {
            about.body
          }
        </p>
        <ul>
          {about.list.map((el, i) => {
            return (
              <li key={i}>
                <i className="material-symbols-outlined">check</i>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
