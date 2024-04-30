import React, { useEffect, useRef, useState } from "react";
import "../scss/cover.scss";
import Nav from "./Nav";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Iinstagram from "../icons/Iinstagram";
import { useTranslation } from "react-i18next";
import bkImg from "../images/cover.jpg";
import bkImgSmall from "../images/cover-small.jpg";
import { MynauiArrowRight } from "./../icons/Icon";


function Cover() {
    const { t, i18n } = useTranslation();

    const [imageLoaded, setImageLoaded] = useState(false);

    const goBottom = () => {
        window.scrollTo({
            top: window.document.documentElement.clientHeight,
            behavior: "smooth",
        });
        console.log(window.document.documentElement);
    };

    //style={{background:'linear-gradient(90deg, rgba(0, 0, 0, 0.94) 10%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.94) 90%), url(http://localhost:3000/static/media/cover.816c1500b312ad415cba.jpg)'}}

    return (
        <div className="photo" id="home">
            <div className="imgBluer">
                {imageLoaded ? (
                    <img src={bkImg} alt="Image" />
                ) : (
                    <img src={bkImgSmall} alt="" />
                )}
                <img
                    src={bkImg}
                    alt="Image"
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: "none" }} // هذا النمط يخفي الصورة لكن يمكن أن يكون ظاهرا
                />
            </div>
            <Nav />
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
            <div className="container">
                <h1
                    dangerouslySetInnerHTML={{
                        __html: t("cover.cover title h1"),
                    }}
                ></h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: t("cover.cover title p"),
                    }}
                ></p>
                <button
                    className={
                        i18n.language === "ar"
                            ? "btn_cover btn_rtl"
                            : "btn_cover"
                    }
                    onClick={goBottom}
                >
                    {t("cover.cover btn")}
                    {/* <i className="material-symbols-outlined">chevron_right</i> */}
                    <MynauiArrowRight className="icon" />
                </button>
            </div>
            
        </div>
    );
}

export default Cover;
