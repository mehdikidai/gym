import React from "react";
import "./../scss/about.scss";
import PhotoAbout from "../images/about.jpg";

function AboutUs() {
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
        <h3>Lorem ipsum dolor sit amet <span>consectetur adipisicing elit.</span> </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          aperiam earum saepe et quas enim perspiciatis voluptates, libero sint
          commodi, consequatur rem vero blanditiis nam aspernatur molestiae vel
          ad hic.
        </p>
        <ul>
          <li><i class="material-symbols-outlined">check</i>Lorem, ipsum dolor.</li>
          <li><i class="material-symbols-outlined">check</i>Lorem, ipsum dolor.</li>
          <li><i class="material-symbols-outlined">check</i>Lorem, ipsum dolor.</li>
          
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
