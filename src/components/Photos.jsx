import React, { useEffect, useState } from "react";
import "./../scss/photo.scss";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MiExpand,MiClose } from "./../icons/Icon";

function Photos() {
    const images = require.context("../images/photo_slider", true);
    const imageList = images.keys().map((image) => images(image));

    const [imgActive, setImgActive] = useState(null);

    useEffect(() => {
        console.log(imgActive);
    }, [imgActive]);

    const handleClose = (e) => {
        if (e.target.id === "image_review") {
            setImgActive(null);
        }
    };

    return (
        <>
            {imgActive !== null ? (
                <div
                    className="image_review"
                    id="image_review"
                    onClick={handleClose}
                >
                    <div className="box">
                        <button
                            className="close_img"
                            onClick={() => setImgActive(null)}
                        >
                            <MiClose className="MiClose" />
                        </button>
                        <img src={imgActive} alt="image review" />
                    </div>
                </div>
            ) : null}
            <div className="photos_slider">
                <Splide
                    className="photos_slider_ul"
                    tag="section"
                    options={{
                        type: "loop",
                        focus: 0,
                        perPage: 3,
                        direction: "rtl",
                        gap: "20px",
                        lazyLoad: "nearby",
                        height: "280px",
                        
                        breakpoints: {
                            640: {
                                perPage: 1,
                                padding: "20px",
                                height: "210px",
                            },
                        },
                    }}
                >
                    {imageList.map((el, i) => {
                        return (
                            <SplideSlide className="box_img" key={i}>
                                <img src={el} alt="Image 1" />
                                <button
                                    className="show_img"
                                    onClick={() => setImgActive(el)}
                                >
                                    <MiExpand className="MiExpand" />
                                </button>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </>
    );
}

export default Photos;
