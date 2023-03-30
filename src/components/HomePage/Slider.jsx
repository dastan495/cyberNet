import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "./Slider.css";
import "swiper/css/pagination";

// import "./home.css";
import "../Header/headerAdaptive.css";
// // import required modules
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper";

import s1 from "../../image/s1.jpg";
import s2 from "../../image/s2.jpg";
import s3 from "../../image/s3.jpg";

export default function App() {
    return (
        <>
            <div className="slider">
                <Swiper
                    slidesPerView={4}
                    grabCursor={true}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={3}
                    grabCursor={true}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="tre"
                    style={{ display: "none" }}
                >
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s1} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s1} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s2} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s3} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s1} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s2} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s3} alt="" />
                </div>
            </div>
        </>
    );
}
