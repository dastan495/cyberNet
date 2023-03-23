import React from "react";
import "./header.css";
import { Navigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img
          onClick={() => Navigate("/")}
          className="navbar__logo"
          //   src={logo}
          alt="navbar logo"
        />
        <ul className="navbar__list">
          <li className="list__item">
            <a onClick={() => Navigate("/")} href="#">
              главная
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("/course")} href="#">
              курсы
            </a>
          </li>
          <li className="list__item">
            <a
              onClick={() => {
                Navigate("/metodic");
                console.log("work");
              }}
              href="#"
            >
              методика
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("/contacts")} href="#">
              контакты
            </a>
          </li>
          <li className="list__item">
            <a onClick={() => Navigate("/event")} href="#">
              вебинары
            </a>
          </li>
        </ul>
        {/* <input type="text" className="navbar__input" /> */}

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
