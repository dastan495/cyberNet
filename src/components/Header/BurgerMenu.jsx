import React from "react";
import closeIcon from "../../image/close.png";
const BurgerMenu = ({ setMenuState }) => {
    return (
        <div className="sidebar">
            <img
                onClick={() => setMenuState(false)}
                src={closeIcon}
                alt=""
                width="50px"
            />
            <ul>
                <li className="list__item">
                    <a style={{ color: "white" }} href="#about_us">
                        about us
                    </a>
                </li>
                <li className="list__item">
                    <a style={{ color: "white" }} href="#best_offers">
                        best offers
                    </a>
                </li>
                <li className="list__item">
                    <a style={{ color: "white" }} href="#our_services">
                        our services
                    </a>{" "}
                </li>
                <li className="list__item">
                    <a style={{ color: "white" }} href="#portfolio">
                        portfolio
                    </a>{" "}
                </li>
                <li className="list__item">
                    <a style={{ color: "white" }} href="#blog">
                        blog
                    </a>{" "}
                </li>
            </ul>
        </div>
    );
};

export default BurgerMenu;
