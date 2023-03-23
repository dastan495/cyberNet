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
                <li className="list__item">about us</li>
                <li className="list__item">best offers</li>
                <li className="list__item">our services</li>
                <li className="list__item">portfolio</li>
                <li className="list__item">blog</li>
            </ul>
        </div>
    );
};

export default BurgerMenu;
