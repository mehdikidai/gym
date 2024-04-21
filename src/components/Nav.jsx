import React, { useEffect, useState } from "react";
import "./../scss/nav.scss";
import Logo from "../images/logo.png";
import { useTranslation } from "react-i18next";
import Flag from "./Flag";

function Nav() {
  const { t, i18n } = useTranslation();

  const [showList,setShowList] = useState(false)

  const [lang, setLang] = useState("en");

  const handleLang = (lang) => {
    console.log(lang);
    setLang(lang);
    setTimeout(()=>{
      setShowList(false)
    },300)
    
  };

  const handleShowList = () =>{
    setShowList(last=> !last)
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="nav">
      <button>
        <img width={120} src={Logo} alt="logo" />
      </button>
      <ul className="nav_ul">
        <li>
          <a href="#">
            <span></span>
            {t("navbar.HOME")}
          </a>
        </li>
        <li>
          <a href="#about">
            <span></span>
            {t("navbar.ABOUT")}
          </a>
        </li>
        <li>
          <a href="#services">
            <span></span>
            {t("navbar.SERVICES")}
          </a>
        </li>
        <li>
          <a href="#prices">
            <span></span>
            {t("navbar.PRICES")}
          </a>
        </li>
        <li>
          <a href="#contact">
            <span></span>
            {t("navbar.CONTACT")}
          </a>
        </li>
        <li>
          <button className="btn_lang" onClick={handleShowList}><Flag src={i18n.language} w={22}/> {i18n.language}</button>
          <div className={showList ? 'list list_show' : 'list'}>
            <button onClick={()=>handleLang('ar')}><Flag src="ar" w={22}/>ar</button>
            <button onClick={()=>handleLang('fr')}><Flag src="fr" w={22}/>fr</button>
            <button onClick={()=>handleLang('en')}><Flag src="en" w={22}/>en</button> 
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
