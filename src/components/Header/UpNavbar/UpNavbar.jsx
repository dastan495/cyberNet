import React from "react";
import "./UpNavbar.css";
import number from "../../../image/number.png";
import email from "../../../image/email.png";
const UpNavbar = () => {
  return (
    <div className="up_navbar">
      <div className="upNav_email">
        <img src={email} alt="" />
        <a href="#">example@example.com</a>
      </div>
      <div className="upNav_number">
        <img src={number} alt="" />
        <a href="">+ 1 818 858 12 08</a>
      </div>
    </div>
  );
};

export default UpNavbar;
