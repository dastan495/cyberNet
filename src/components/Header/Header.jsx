import React, { useState } from "react";
import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import burgerMenu from "../../image/menu.png";
import BurgerMenu from "./BurgerMenu";
import "./headerAdaptive.css";
const Header = () => {
  const Navigate = useNavigate();
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="container" onClick={() => setMenuState(false)}>
      <div className="navbar">
        <img
          onClick={() => Navigate("/")}
          className="navbar__logo"
          src={logo}
          alt="navbar logo"
        />
        <ul className="navbar__list">
          <li className="list__item">
            <a onClick={() => Navigate("/")} href="#">
              about us
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("")} href="#">
              best offers
            </a>
          </li>
          <li className="list__item">
            <a
              onClick={() => {
                Navigate("");
                console.log("work");
              }}
              href="#"
            >
              our services
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("")} href="#">
              portfolio
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("")} href="#">
              blog
            </a>
          </li>
        </ul>

        {/* <input type="text" className="navbar__input" /> */}

        <div
          className="auth_button_div"
          // style={{ display: "flex", alignItems: "center" }}
        >
          <button onClick={() => Navigate("/meeting")} className="auth__button">
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
          {menuState && (
            <div className="sidebarMenu">
              <BurgerMenu setMenuState={setMenuState} />
            </div>
          )}
        </div>
      </div>

      {/* <!-- navbar end --> */}
    </div>
  );
};

export default Header;
