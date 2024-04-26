import React from "react";
import "./../scss/about.scss";
import PhotoAbout from "../images/about/index.jpg";
import { useTranslation } from 'react-i18next';


function AboutUs() {
  
  const { t } = useTranslation();
  return (
    <div className="AboutAs" id="about">
      <div className="box_1 box">
        <img src={PhotoAbout} alt="test" />
      </div>
      <div className="box_2 box">
        {/* <div className="title_about">
          <span></span>
          <h2>{t('about.about')}</h2>
        </div> */}
        <h3 dangerouslySetInnerHTML={{ __html: t('about.about title h3') }}></h3>
        <p>
          {
            t('about.about body')
          }
        </p>
        <ul>
          {t('about.list',{ returnObjects: true }).map((el, i) => {
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
