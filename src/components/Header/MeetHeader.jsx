import React, { useState } from "react";
import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../image/logo2.png";
import burgerMenu from "../../image/bar.png";
// import BurgerMenu from "./BurgerMenu";
import "./headerAdaptive.css";
const MeetHeader = () => {
    const Navigate = useNavigate();
    const [menuState, setMenuState] = useState(false);
    return (
        <div className="container">
            <div className="navbar">
                <img
                    onClick={() => Navigate("/")}
                    className="nv2"
                    src={logo}
                    alt="navbar logo"
                />
                <ul className="navbar__list">
                    <li>
                        <img
                            onClick={() => Navigate("/")}
                            className="navbar__logo"
                            src={logo}
                            alt="navbar logo"
                        />
                    </li>

                    <li className="list__item2">
                        <a color="black" href="#about_us">
                            about us
                        </a>
                    </li>
                    <li color="black" className="list__item2">
                        <a href="#best_offers">best offers</a>
                    </li>
                    <li color="black" className="list__item2">
                        <a href="#our_services">our services</a>
                    </li>
                    <li color="black" className="list__item2">
                        <a href="#portfolio">portfolio</a>
                    </li>
                    <li color="black" className="list__item2">
                        <a href="#blog">blog</a>
                    </li>
                </ul>
                {/* <input type="text" className="navbar__input" /> */}

                <div
                    className="auth_button_div"
                    // style={{ display: "flex", alignItems: "center" }}
                >
                    {/* <button
                        className="auth__button"
                        onClick={() => Navigate("/meeting")}
                    >
                        make meeting
                    </button> */}
                    <select className="select_leng2">
                        <option value="">ENG</option>
                        <option value="">RUS</option>
                    </select>
                </div>
                <div className="burger_menu">
                    <div className="burger_menu_img">
                        <img
                            onClick={(e) => {
                                setMenuState(true);
                                e.stopPropagation();
                            }}
                            src={burgerMenu}
                            alt=""
                            width="100%"
                        />
                    </div>
                </div>
            </div>

            {/* <!-- navbar end --> */}
        </div>
    );
};

export default MeetHeader;
