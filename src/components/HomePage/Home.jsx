import React, { useState } from "react";
import "../Header/header.css";
import banner from "../../image/banner.jpg";
import "../Footer/footer.css";
import "./home.css";
import art from "../../image/AI.jpg";
import about from "../../image/about.jpg";
import Slider from "./Slider";
import { prodArr, prodArr2 } from "../../consts";
import "../Header/headerAdaptive.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [cardState, setCardState] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="container">
            {/* <header> */}
            <div className="header_main_block">
                <div className="header_block_left" data-aos="fade-right">
                    <h2 className="header__title_left">
                        Family owners business <br /> of programmers
                    </h2>
                    <p className="header__desc_left">
                        We do not just make websites, we make selling websites
                        using AI. Own methodology for creating and promoting
                        sites using AI Experience in programming 30+ Results
                        Guarantee
                    </p>
                    <button className="header__btn" onClick={() => navigate("/meeting")}>
                        make meeting
                        {/* <img
                            className="btn__icon"
                            src={banner}
                            alt="arrow-right"
                        /> */}
                    </button>
                </div>
                <div className="header__block_right">
                    <img className="header__img" src={banner} alt="" />
                </div>
            </div>
            {/* </header> */}

            <div className="services">
                <h1 className="services__title_main" data-aos="fade-up">
                    The use of AI is essential for businesses to remain
                    competitive in the marketplace and meet customer needs and
                    preferences.
                </h1>
                <ul
                    style={{ textAlign: "center", alignItems: "center" }}
                    className="services__list"
                >
                    <li
                        style={{}}
                        className="services__item"
                        data-aos="fade-up"
                    >
                        {/* <img className="services__icon" src={opyt} alt="" /> */}
                        <h3
                            style={{ fontSize: "50px" }}
                            className="services_desc"
                        >
                            Up to $ 3900
                        </h3>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Building a website using
                        </p>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Order now and get free high-speed hosting
                        </p>
                        <button className="header__btn1" type="">
                            book meeting
                        </button>
                    </li>

                    <li
                        style={{}}
                        className="services__item"
                        data-aos="fade-up"
                    >
                        {/* <img className="services__icon" src={opyt} alt="" /> */}
                        <h3
                            style={{ fontSize: "50px" }}
                            className="services_desc"
                        >
                            Up to $ 3900
                        </h3>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Building a website using
                        </p>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Order now and get free high-speed hosting
                        </p>
                        <button className="header__btn1" type="">
                            book meeting
                        </button>
                    </li>

                    <li
                        style={{}}
                        className="services__item"
                        data-aos="fade-up"
                    >
                        {/* <img className="services__icon" src={opyt} alt="" /> */}
                        <h3
                            style={{ fontSize: "50px" }}
                            className="services_desc"
                        >
                            Up to $ 3900
                        </h3>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Building a website using
                        </p>
                        <p
                            style={{
                                fontSize: "30px",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            Order now and get free high-speed hosting
                        </p>
                        <button className="header__btn1" type="">
                            book meeting
                        </button>
                    </li>
                </ul>
            </div>

            {/*  */}
            <div className="main_duble">
                <div>
                    <img src={art} alt="" />
                </div>
                <div className="infos">
                    <h3>
                        Artificial intelligence (AI) can have a significant
                        impact on business promotion.
                    </h3>
                    <br />
                    <h3>
                        AI can quickly analyze large amounts of data and
                        identify trends and patterns that can help determine
                        which products or services are most in demand by
                        customers. This can help a business customize their
                        marketing and sales strategy.
                    </h3>
                    <br />
                    <h3>
                        AI can help businesses automate routine tasks, which can
                        save time and resources.
                    </h3>
                    <br />
                    <h3>
                        Overall, AI can help businesses streamline their
                        operations, improve efficiency, and improve product and
                        customer experience.
                    </h3>
                    <br />
                </div>
            </div>
            {/*  */}
            <div className="white__zone">
                <h1 className="ours">Our services</h1>
                <div className="wrap__white">
                    <div className="cols__wprap">
                        <h2>Development</h2>
                        <ul>
                            <li>Full stack development</li>
                            <li>Ecommerce Development</li>
                            <li>CRM system</li>
                            <li>Web App</li>
                            <li>Mobile Development</li>
                            <li>Joomla + VirtueMart</li>
                            <li>Magento</li>
                            <li>API Integration</li>
                            <li>Direzione Tecnica</li>
                            <li>Branding</li>
                            <li>Search engine optimization(SEO)</li>
                        </ul>
                    </div>
                    <div className="cols__wprap">
                        <h2>Web design</h2>
                        <ul>
                            <li>Landing Page</li>
                            <li>Siti Web</li>
                            <li>eCommerce</li>
                            <li>Web App</li>
                            <li>UI / UX</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                    <div className="cols__wprap">
                        <h2>Advertising</h2>
                        <ul>
                            <li>Campagne Pubblicitarie</li>
                            <li>SEO</li>
                            <li>SEM</li>
                            <li>Google ADS</li>
                            <li>Social Media Ads</li>
                            <li>Strategia</li>
                            <li>Social Media Management</li>
                            <li>Community Management</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*  */}

            <div style={{ marginTop: "10%" }} id="about_us" className="main_duble">
                <div className="infos2">
                    <h1>About Us </h1>
                    <h3>
                        <br />
                        About us how good we are, we are engineers and
                        programmers of the 4th generation. We have developed our
                        own methods for creating and promoting websites. AI is
                        of particular importance in the modern world, so we are
                        actively using AI technology in business.
                    </h3>
                </div>
                <div>
                    <img src={about} alt="" />
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="photo_block">
                <h2
                    style={{
                        fontSize: "35px",
                        color: "white",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center",
                        alignItems: "center",
                    }}
                >
                    COMMUNITY
                </h2>
                <Slider />
            </div>
            <div className="studentCase_block">
                <h1>case students</h1>
                <div className="studentCase_block_list">
                    {prodArr?.map((item) => (
                        <div className="case_block_card" key={item.id}>
                            <div className="card_img">
                                <img src={item.img} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <h4>{item.desc}</h4>
                            <p>{item.year}</p>
                        </div>
                    ))}
                </div>
                {cardState && (
                    <div className="studentCase_block_list">
                        {prodArr2?.map((item) => (
                            <div className="case_block_card" key={item.id}>
                                <div className="card_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <h4>{item.desc}</h4>
                                <p>{item.year}</p>
                            </div>
                        ))}
                    </div>
                )}
                <button
                    className="seemore_btn"
                    onClick={() => setCardState(!cardState)}
                >
                    {cardState ? "close" : "see more"}
                </button>
            </div>
            {/*  */}
        </div>
    );
};

export default Home;
