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
    const [showMenu, setShowMenu] = useState(false);
    const [langs, setLangs] = useState([]);

    const handleLang = (lang) => {
        setLang(lang);
        setTimeout(() => {
            setShowList(false);
        }, 300);
    };

    const handleShowList = () => setShowList((last) => !last);
    const goToHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const closeMenu = () => setShowMenu(false);

    const handleShowMenu = () => setShowMenu((last) => !last);

    useEffect(() => {
        i18n.changeLanguage(lang);
        setLangs(Object.keys(i18n.store.data).filter((el) => el !== lang));
    }, [lang]);

    return (
        <div className="nav">
            <div className="nav_container">
                <button onClick={goToHome}>
                    <img width={120} src={Logo} alt="logo" />
                </button>
                <ul className={showMenu ? "nav_ul  nav_ul_active" : "nav_ul"}>
                    <li>
                        <Link
                            to={t("navbar.HOME.id")}
                            spy={true}
                            smooth={true}
                            duration={40}
                            onClick={closeMenu}
                        >
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
                    <li className="list_lang">
                        <button className="btn_lang" onClick={handleShowList}>
                            <Flag src={i18n.language} w={22} /> {i18n.language}
                        </button>
                        <div className={showList ? "list list_show" : "list"}>
                           
                            {langs.map((lang, i) => {
                                return (
                                    <button key={i} onClick={() => handleLang(lang)}>
                                        <Flag src={lang} w={22} />
                                        {lang}
                                    </button>
                                );
                            })}
                        </div>
                    </li>
                </ul>
                <button
                    onClick={handleShowMenu}
                    className={
                        showMenu ? "btn_menu btn_menu_active" : "btn_menu"
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
}

export default Nav;
