import React, { useEffect, useRef, useState } from "react";
import "../Header/header.css";
import "./homeCard.css";
import "../Footer/footer.css";
import "../Header/headerAdaptive.css";
import "./home.css";
import Slider from "./Slider";
import { prodArr, prodArr2 } from "../../consts";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../Header/BurgerMenu";
import UpNavbar from "../Header/UpNavbar/UpNavbar";
import NET from "vanta/dist/vanta.net.min";
import Header from "../Header/Header";
import banner from "../../image/banner.webp";
import art from "../../image/art.webp";
import artAdap from "../../image/ai-adap.webp";
import about from "../../image/s13.webp";
import aboutUsImg from "../../image/aboutas.webp";
import UsAi from "../../image/UsAI.png";
import UsAi_img1 from "../../image/UsAi_img1.png";
import UsAi_img2 from "../../image/UsAi_img2.png";
import z from "../../image/z.png";
import leftPhote from "../../image/negt.png";
import rightPhoteTop from "../../image/girl.png";
import rightPhoteBot from "../../image/ind.png";
import play from "../../image/play.png";
const Home = (props) => {
  const [cardState, setCardState] = useState(false);
  const navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);
  const [iframe, setIframe] = useState(true);
  const [iframe2, setIframe2] = useState(true);
  const [iframe3, setIframe3] = useState(true);
  const [iframe4, setIframe4] = useState(true);
  const [iframe5, setIframe5] = useState(true);
  const [iframe6, setIframe6] = useState(true);
  const [iframe7, setIframe7] = useState(true);
  const [iframe8, setIframe8] = useState(true);
  const [iframe9, setIframe9] = useState(true);
  const [iframe10, setIframe10] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 200.0,
          // zoom: 1.7,
          scale: 1,
          scaleMobile: 1.0,
          color: "#4AA2B8",
          backgroundColor: "#034A82",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="container" onClick={() => setMenuState(false)}>
      {menuState && (
        <div className="sidebarMenu" onClick={(e) => e.stopPropagation()}>
          <BurgerMenu setMenuState={setMenuState} />
        </div>
      )}
      <div className="my_vanta" style={{ zIndex: "1" }} ref={myRef}>
        <UpNavbar />
        <Header setMenuState={setMenuState} />
        <div className="header_main_block">
          <div className="header_block_left" data-aos="fade-right">
            <h2 className="header__title_left">
              Digital Marketing - <br /> #1 CyberNer
            </h2>
            <p className="header__desc_left">
              We do not just make websites, we make selling websites using AI.
              Own methodology for creating and promoting sites using AI
              Experience in programming 30+ Results Guarantee
            </p>
            <button
              className="header__btn"
              onClick={() => navigate("/meeting")}
            >
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
      </div>
      {/* </header> */}
      <div style={{ zIndex: "2" }} className="services UsSer" id="best_offers">
        <img className="UsAI" src={UsAi} alt="" />
        <h1 className="services__title_main" data-aos="fade-up">
          The use of AI is essential for businesses to remain competitive in the
          marketplace and meet customer needs and preferences.
        </h1>
        <ul className="services__list">
          <li className="services__item" data-aos="fade-up">
            <img src={UsAi_img1} alt="" />
            <h3 className="services_desc">Up to $ 3900</h3>
            <p>Building a website using</p>
            <p>Order now and get free high-speed hosting</p>
            <button
              className="header__btn1"
              onClick={() => navigate("/meeting")}
              type=""
            >
              book meeting
            </button>
          </li>

          <li className="services__item" data-aos="fade-up">
            <img src={UsAi_img2} alt="" />
            <h3 className="services_desc">Up to $ 3900</h3>
            <p>Building a website using</p>
            <p>Order now and get free high-speed hosting</p>
            <button
              onClick={() => navigate("/meeting")}
              className="header__btn1"
              type=""
            >
              book meeting
            </button>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="main_duble ">
        <div className="about_block_img2">
          <img className="img1" src={art} alt="" />
        </div>
        <div
          className="infos"
          style={{
            backgroundImage: `url(${aboutUsImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>
            Artificial intelligence (AI) can have a significant impact on
            business promotion.
          </h3>
          <br />
          <h3>
            AI can quickly analyze large amounts of data and identify trends and
            patterns that can help determine which products or services are most
            in demand by customers. This can help a business customize their
            marketing and sales strategy.
          </h3>
          <br />
          <h3>
            AI can help businesses automate routine tasks, which can save time
            and resources.
          </h3>
          <br />
          <h2 className="big_h3">
            Overall, AI can help businesses streamline their operations, improve
            efficiency, and improve product and customer experience.
          </h2>
          <h2 className="nones" style={{ display: "none" }}>
            Overall, AI can help businesses streamline their operations, improve
            efficiency, and improve product and customer experience.
          </h2>
          <br />
        </div>
        <div
          className="infos adap"
          style={{
            backgroundImage: `url(${artAdap})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>
            Artificial intelligence (AI) can have a significant impact on
            business promotion.
          </h3>
          <br />
          <h3>
            AI can quickly analyze large amounts of data and identify trends and
            patterns that can help determine which products or services are most
            in demand by customers. This can help a business customize their
            marketing and sales strategy.
          </h3>
          <br />
          <h3>
            AI can help businesses automate routine tasks, which can save time
            and resources.
          </h3>
          <br />
          <h2 className="big_h3">
            Overall, AI can help businesses streamline their operations, improve
            efficiency, and improve product and customer experience.
          </h2>
          <br />
        </div>
      </div>
      {/*  */}
      <section className="services" id="our_services">
        <div className="ser_con">
          <div className="services__items">
            <h4>Our services</h4>
            <div className="services_items_block">
              <h3 className="ser-h3">Development</h3>
              <ul className="ser_spisok">
                <li>
                  <a href="/meeting">Full stack development</a>
                </li>
                <li>
                  <a href="/meeting">Ecommerce Development</a>
                </li>
                <li>
                  <a href="/meeting">CRM system</a>
                </li>
                <li>
                  <a href="/meeting">Web App</a>
                </li>
                <li>
                  <a href="/meeting">Mobile Development</a>
                </li>
                <li>
                  <a href="/meeting">Joomla + VirtueMart</a>
                </li>
                <li>
                  <a href="/meeting">Magento</a>
                </li>
                <li>
                  <a href="/meeting">API Integration</a>
                </li>
                <li>
                  <a href="/meeting">Direzione Tecnica</a>
                </li>
                meeting
                <li>
                  <a href="/meeting">Branding</a>
                </li>
                <li>
                  <a href="/meeting">Search engine optimization(SEO)</a>
                </li>
              </ul>
            </div>

            <div className="services_items_block">
              <h3 className="ser-h3">Web design</h3>
              <ul className="ser_spisok">
                <li>
                  <a href="/meeting">Landing Page</a>
                </li>
                <li>
                  <a href="/meeting">Siti Web</a>
                </li>
                <li>
                  <a href="/meeting">eCommerce</a>
                </li>
                <li>
                  <a href="/meeting">Web App</a>
                </li>
                <li>
                  <a href="/meeting">UI / UX</a>
                </li>
                <li>
                  <a href="/meeting">Branding</a>
                </li>
              </ul>
            </div>

            <div className="services_items_block">
              <h3 className="ser-h3">Development</h3>
              <ul className="ser_spisok">
                <li>
                  <a href="/meeting">Full stack development</a>
                </li>
                <li>
                  <a href="/meeting">Ecommerce Development</a>
                </li>
                <li>
                  <a href="/meeting">CRM system</a>
                </li>
                <li>
                  <a href="/meeting">Web App</a>
                </li>
                <li>
                  <a href="/meeting">Mobile Development</a>
                </li>
                <li>
                  <a href="/meeting">Joomla + VirtueMart</a>
                </li>
                <li>
                  <a href="/meeting">Magento</a>
                </li>
                <li>
                  <a href="/meeting">API Integration</a>
                </li>
                <li>
                  <a href="/meeting">Direzione Tecnica</a>
                </li>
                <li>
                  <a href="/meeting">Branding</a>
                </li>
                <li>
                  <a href="/meeting">Search engine optimization(SEO)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="white__zone" id="our_services">
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

      <div
        style={{ marginTop: "50px", marginBottom: "50px" }}
        id="about_us"
        className="main_duble2 double2"
      >
        <div className="about_block_img">
          <img src={about} alt="" />
        </div>
        <div
          className="infos2"
          style={{
            backgroundImage: `url(${aboutUsImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <h1>About Us </h1>
          <h3>
            <br />
            About us how good we are, we are engineers and programmers of the
            4th generation. We have developed our own methods for creating and
            promoting websites. AI is of particular importance in the modern
            world, so we are actively using AI technology in business.
          </h3>
        </div>
        <div
          className="infos2 adap2"
          style={{
            backgroundImage: `url(${artAdap})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <h1>About Us </h1>
          <h3>
            <br />
            About us how good we are, we are engineers and programmers of the
            4th generation. We have developed our own methods for creating and
            promoting websites. AI is of particular importance in the modern
            world, so we are actively using AI technology in business.
          </h3>
        </div>
      </div>
      {/*  */}
      <div className="scrol_ots">
        <h1>TESTIMONALS</h1>
        <div className="scroll_box">
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <p>
              My second time using them. They are quick to respond, very nice,
              and have reasonable prices. I will definitely be calling them in
              the future with any of my home hvac needs/repairs.
            </p>
            <h3>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="scrol_otss">
        <div className="scroll_boxx">
          <div className="scroll_migh">
            <div>
              <div style={{ position: "relative" }}>
                {iframe6 ? (
                  <div onClick={() => setIframe6(false)}>
                    <img
                      style={{
                        width: "100%",
                        height: "210px",
                      }}
                      src={leftPhote}
                      alt=""
                    />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos3">
                    <div class="ratio-inner ratio-4-5">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <div>
              <div style={{ position: "relative" }}>
                {iframe7 ? (
                  <div onClick={() => setIframe7(false)}>
                    <img
                      style={{
                        width: "100%",
                        height: "210px",
                      }}
                      src={leftPhote}
                      alt=""
                    />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos3">
                    <div class="ratio-inner ratio-4-5">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <div>
              <div style={{ position: "relative" }}>
                {iframe8 ? (
                  <div onClick={() => setIframe8(false)}>
                    <img
                      style={{
                        width: "100%",
                        height: "210px",
                      }}
                      src={leftPhote}
                      alt=""
                    />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos3">
                    <div class="ratio-inner ratio-4-5">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <div>
              <div style={{ position: "relative" }}>
                {iframe9 ? (
                  <div onClick={() => setIframe9(false)}>
                    <img
                      style={{
                        width: "100%",
                        height: "210px",
                      }}
                      src={leftPhote}
                      alt=""
                    />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos3">
                    <div class="ratio-inner ratio-4-5">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="scroll_migh">
            <div>
              <div style={{ position: "relative" }}>
                {iframe10 ? (
                  <div onClick={() => setIframe10(false)}>
                    <img
                      style={{
                        width: "100%",
                        height: "210px",
                      }}
                      src={leftPhote}
                      alt=""
                    />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos3">
                    <div class="ratio-inner ratio-4-5">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img width={"35%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="main_video">
        <div className="main_video_box">
          <div className="main_image">
            <div style={{ position: "relative" }}>
              {iframe ? (
                <div onClick={() => setIframe(false)}>
                  <img className="main_video_img" src={leftPhote} alt="" />
                  <img className="play_video_img" src={play} alt="" />
                </div>
              ) : (
                <div className="main_videos">
                  <div class="ratio-inner ratio-4-1">
                    <div class="ratio-content">
                      <iframe
                        width="95%"
                        height="100%"
                        src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
            <p className="p_scr">CEO Layerswift</p>
            <div
              className="asd"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img width={"15%"} src={z} alt="" />
              <h5>5.9</h5>
            </div>
          </div>
          <div className="a">
            <div>
              <div style={{ position: "relative" }}>
                {iframe2 ? (
                  <div onClick={() => setIframe2(false)}>
                    <img className="ds" src={rightPhoteTop} alt="" />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos2">
                    <div class="ratio-inner ratio-4-3">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
              <p className="p_scr">CEO Layerswift</p>
              <div
                className="asd"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img width={"35%"} src={z} alt="" />
                <h5>5.9</h5>
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                {iframe3 ? (
                  <div onClick={() => setIframe3(false)}>
                    <img className="ds" src={rightPhoteBot} alt="" />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos2">
                    <div class="ratio-inner ratio-4-3">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
              <p className="p_scr">CEO Layerswift</p>
              <div
                className="asd"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img width={"35%"} src={z} alt="" />
                <h5>5.9</h5>
              </div>
            </div>
          </div>
          <div className="a">
            <div>
              <div style={{ position: "relative" }}>
                {iframe4 ? (
                  <div onClick={() => setIframe4(false)}>
                    <img className="ds" src={rightPhoteTop} alt="" />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos2">
                    <div class="ratio-inner ratio-4-3">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
              <p className="p_scr">CEO Layerswift</p>
              <div
                className="asd"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img width={"35%"} src={z} alt="" />
                <h5>5.9</h5>
              </div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                {iframe5 ? (
                  <div onClick={() => setIframe5(false)}>
                    <img className="ds" src={rightPhoteBot} alt="" />
                    <img className="play_video_img2" src={play} alt="" />
                  </div>
                ) : (
                  <div className="videos2">
                    <div class="ratio-inner ratio-4-3">
                      <div class="ratio-content">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/1NMZ0MpaEuY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h3 style={{ lineHeight: "1.5" }}>Jane Cooper</h3>
              <p className="p_scr">CEO Layerswift</p>
              <div
                className="asd"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img width={"35%"} src={z} alt="" />
                <h5>5.9</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="photo_block">
        <h2
          style={{
            width: "85%",
            fontSize: "35px",
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
          }}
        >
          COMMUNITY
        </h2>
        <Slider />
      </div>
      <div className="case">
        <div className="studentCase_block" id="portfolio">
          <h1
            className="blo-h1"
            style={{
              fontSize: "50px",
              lineHeight: "70px",
              textTransform: "uppercase",
            }}
          >
            case students
          </h1>
          <div className="studentCase_block_list">
            {/* {prodArr?.map((item) => (
              <div className="case_block_card" key={item.id}>
                <div className="card_img">
                  <img src={item.img} alt="" />
            <div className="case">
                <div className="studentCase_block" id="portfolio">
                    <h1
                        className="blo-h1"
                        style={{
                            fontSize: "50px",
                            lineHeight: "70px",
                            textTransform: "uppercase",
                        }}
                    >
                        case students
                    </h1> */}
            <div className="studentCase_block_list">
              {prodArr?.map((item) => (
                <div className="case_block_card" key={item.id}>
                  <div className="card_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="case-items-block-info">
                    <a className="a-title" href="/">
                      {item.title}
                    </a>
                    <div className="info_title_mini">{item.desc}</div>
                    <div className="case__item-_block_date">{item.year}</div>
                  </div>
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
                    <div className="case-items-block-info">
                      <a className="a-title" href="/">
                        {item.title}
                      </a>
                      <div className="info_title_mini">{item.desc}</div>
                      <div className="case__item-_block_date">{item.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!cardState && (
              <div
                className="div"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  className="seemore_btn"
                  onClick={() => setCardState(!cardState)}
                >
                  {cardState ? "close" : "see more"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
