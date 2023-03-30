import React from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../image/close.png";
const BurgerMenu = ({ setMenuState }) => {
    const navigate = useNavigate();
    return (
        <div className="sidebar" style={{ zIndex: "20" }}>
            <img
                onClick={() => setMenuState(false)}
                src={closeIcon}
                alt=""
                width="50px"
            />
            <ul>
                <button onClick={() => navigate("/meeting")}>
                    make meeting
                </button>
                <select className="select_leng3">
                    <option value="">ENG</option>
                    <option value="">RUS</option>
                </select>
                <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#about_us"
                    >
                        about us
                    </a>
                </li>
                <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#best_offers"
                    >
                        best offers
                    </a>
                </li>
                <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#our_services"
                    >
                        our services
                    </a>{" "}
                </li>
                <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#portfolio"
                    >
                        portfolio
                    </a>{" "}
                </li>
                {/* <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#blog"
                    >
                        blog
                    </a>{" "}
                </li> */}
            </ul>
        </div>
    );
};

export default BurgerMenu;
