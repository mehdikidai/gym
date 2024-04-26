import React, { useEffect, useRef, useState } from "react";
import "./../scss/nav.scss";
import Logo from "../images/logo.png";
import { useTranslation } from "react-i18next";
import Flag from "./Flag";
import { Link } from "react-scroll";

function Nav() {

    const { t, i18n } = useTranslation();
    const [showList, setShowList] = useState(false);
    const [lang, setLang] = useState(i18n.language);

    const handleLang = (lang) => {
        setLang(lang);
        setTimeout(() => {
            setShowList(false);
        }, 300);
    };

    const handleShowList = () =>  setShowList((last) => !last);
    const goToHome = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const closeMenu = () => console.log('closeMenu')


    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <div className="nav">
            <div className="nav_container">
                <button onClick={goToHome}>
                    <img width={120} src={Logo} alt="logo" />
                </button>
                <ul className="nav_ul">
                    <li>
                        <Link  to={t("navbar.HOME.id")} spy={true} smooth={true} duration={40} onClick={closeMenu}>
                            <span></span>
                            {t("navbar.HOME.name")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={t("navbar.ABOUT.id")}
                            spy={true}
                            smooth={true}
                            offset={-140}
                            duration={40} 
                            onClick={closeMenu}
                        >
                            <span></span>
                            {t("navbar.ABOUT.name")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={t("navbar.SERVICES.id")}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={40}
                            onClick={closeMenu}
                        >
                            <span></span>
                            {t("navbar.SERVICES.name")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={t("navbar.PRICES.id")}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={40}
                            onClick={closeMenu}
                        >
                            <span></span>
                            {t("navbar.PRICES.name")}
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to={t("navbar.CONTACT.id")}
                            spy={true}
                            smooth={true}
                            duration={40}
                            onClick={closeMenu}
                        >
                            <span></span>
                            {t("navbar.CONTACT.name")}
                        </Link>
                    </li> */}
                    <li>
                        <button className="btn_lang" onClick={handleShowList}>
                            <Flag src={i18n.language} w={22} /> {i18n.language}
                        </button>
                        <div className={showList ? "list list_show" : "list"}>
                            <button onClick={() => handleLang("ar")}>
                                <Flag src="ar" w={22} />
                                ar
                            </button>
                            <button onClick={() => handleLang("fr")}>
                                <Flag src="fr" w={22} />
                                fr
                            </button>
                            <button onClick={() => handleLang("en")}>
                                <Flag src="en" w={22} />
                                en
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
