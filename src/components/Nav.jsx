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
          <a href={`#${t("navbar.HOME.id")}`}>
            <span></span>
            {t("navbar.HOME.name")}
          </a>
        </li>
        <li>
          <a href={`#${t("navbar.ABOUT.id")}`}>
            <span></span>
            {t("navbar.ABOUT.name")}
          </a>
        </li>
        <li>
          <a href={`#${t("navbar.SERVICES.id")}`}>
            <span></span>
            {t("navbar.SERVICES.name")}
          </a>
        </li>
        <li>
          <a href={`#${t("navbar.PRICES.id")}`}>
            <span></span>
            {t("navbar.PRICES.name")}
          </a>
        </li>
        <li>
          <a href={`#${t("navbar.CONTACT.id")}`}>
            <span></span>
            {t("navbar.CONTACT.name")}
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
