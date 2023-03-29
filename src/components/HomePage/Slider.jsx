import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "./Slider.css";
import "swiper/css/pagination";


// import "./home.css";

// // import required modules
// import { Autoplay, Pagination } from "swiper";

import s1 from "../../image/s1.jpg";
import s2 from "../../image/s2.jpg";
import s3 from "../../image/s3.jpg";

export default function App() {
  return (
    <>
      <div className="slider">
        <div className="slider_img sl">
          <img src={s1} alt="" />
        </div>
        <div className="slider_img">
          <img src={s2} alt="" />
        </div>
        <div className="slider_img sl">
          <img src={s3} alt="" />
        </div>
        <div className="slider_img">
          <img src={s1} alt="" />
        </div>
        <div className="slider_img sl">
          <img src={s2} alt="" />
        </div>
        <div className="slider_img">
          <img src={s3} alt="" />
        </div>
      </div>
    </>
  );

}
