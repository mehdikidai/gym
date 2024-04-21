import React from "react";
import "../scss/cover.scss";
import Nav from "./Nav";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Iinstagram from "../icons/Iinstagram";
import { useTranslation } from 'react-i18next';

function Cover() {

  const { t, i18n } = useTranslation();

  const goBottom = () => {
    window.scrollTo({
      top: window.document.documentElement.clientHeight,
      behavior: "smooth",
    });
    console.log(window.document.documentElement);
  };

  
  return (
    <div className="photo">
      <div className="social_media">
        <a href="#">
          <Facebook w={22} />
        </a>
        <a href="#">
          <Twitter w={22} />
        </a>
        <a href="#">
          <Iinstagram w={22} />
        </a>
      </div>
      <div
        className="container"
        
      >
        <Nav />
        <h1 dangerouslySetInnerHTML={{ __html: t('cover.cover title h1') }}></h1>
        <p dangerouslySetInnerHTML={{ __html: t('cover.cover title p') }}></p>
        <button className={i18n.language === "ar" ? "btn_cover btn_rtl" : "btn_cover"} onClick={goBottom}>
          {
            t('cover.cover btn')
          }
          <i className="material-symbols-outlined">chevron_right</i>
        </button>
      </div>
    </div>
  );
}

export default Cover;
