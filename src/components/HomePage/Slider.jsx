import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./Slider.css";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import s1 from "../../image/s1.jpg";
import s2 from "../../image/s2.jpg";
import s3 from "../../image/s3.jpg";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          transitionDuration: "0ms",
          // transform: "translate3d(-1189px, 0px, 0px)",
        }}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="d-1">
          <img src={s1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="d-1">
          <img src={s2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="d-1">
          <img src={s3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="d-1">
          <img src={s1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="d-1">
          <img src={s2} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
