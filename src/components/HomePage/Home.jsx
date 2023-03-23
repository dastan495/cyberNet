import React from "react";
import "../Header/header.css";
import banner from "../../image/banner.jpg";

const Home = () => {
  return (
    <div className="container">
      {/* <header> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="header_block_left" data-aos="fade-right">
          <h2 className="header__title_left">
            Family owners business <br /> of programmers
          </h2>
          <p className="header__desc_left">
            We do not just make websites, we make selling websites using AI. Own
            methodology for creating and promoting sites using AI Experience in
            programming 30+ Results Guarantee
          </p>
          <button className="header__btn">
            make meeting
            {/* <img className="btn__icon" src={banner} alt="arrow-right" /> */}
          </button>
        </div>
        <div className="header__block_right">
          <img className="header__img" src={banner} alt="" />
        </div>
      </div>
      {/* </header> */}

      <div className="services">
        <h1 className="services__title_main" data-aos="fade-up">
          The use of AI is essential for businesses to remain competitive in the
          marketplace and meet customer needs and preferences.
        </h1>
        <ul className="services__list">
          <li className="services__item" data-aos="fade-up">
            {/* <img className="services__icon" src={opyt} alt="" /> */}
            <h3 className="services_desc">up to $ 3900</h3>
            <p>Building a website using AI</p>
            <p>Order now and get free high-speed hosting</p>
          </li>

          <li className="services__item" data-aos="fade-up">
            {/* <img className="services__icon" src={free1} alt="" /> */}
            <h3 className="services_desc">Бесплатный коворкинг</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
