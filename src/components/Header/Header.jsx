import React, { useState } from "react";
import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import burgerMenu from "../../image/menu.png";
import BurgerMenu from "./BurgerMenu";
import "./headerAdaptive.css";
const Header = ({ setMenuState }) => {
    const Navigate = useNavigate();
    // const [menuState, setMenuState] = useState(false);
    return (
        <div className="container">
            <div className="navbar">
                <img
                    onClick={() => Navigate("/")}
                    className="navbar__logo"
                    src={logo}
                    alt="navbar logo"
                />
                <ul className="navbar__list">
                    <li className="list__item">
                        <a href="#about_us">about us</a>
                    </li>
                    <li className="list__item">
                        <a href="#best_offers">best offers</a>
                    </li>
                    <li className="list__item">
                        <a href="#our_services">our services</a>
                    </li>
                    <li className="list__item">
                        <a href="#portfolio">portfolio</a>
                    </li>
                    <li className="list__item">
                        <a href="#blog">blog</a>
                    </li>
                </ul>
                {/* <input type="text" className="navbar__input" /> */}

                <div
                    className="auth_button_div"
                    // style={{ display: "flex", alignItems: "center" }}
                >
                    <button
                        className="auth__button"
                        onClick={() => Navigate("/meeting")}
                    >
                        make meeting
                    </button>
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

export default Header;
