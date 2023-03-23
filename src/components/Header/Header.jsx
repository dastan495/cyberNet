import React from "react";
import "./header.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";

const Header = () => {
  const navigate = useNavigate();
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
            <a href="#">about us</a>
          </li>
          <li className="list__item">
            <a href="#">best offers</a>
          </li>
          <li className="list__item">
            <a href="#">our services</a>
          </li>
          <li className="list__item">
            <a href="#">portfolio</a>
          </li>
          <li className="list__item">
            <a href="#">blog</a>
          </li>
        </ul>

        {/* <input type="text" className="navbar__input" /> */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => navigate("/meeting")} className="auth__button">
            make meeting
          </button>
        </div>

        <img
          src="./images/burger_btn.png"
          alt=""
          className="navbar__btn_burger"
        />
      </div>

      {/* <!-- navbar end --> */}
    </div>
  );
};

export default Header;
