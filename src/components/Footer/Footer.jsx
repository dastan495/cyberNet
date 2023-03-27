import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="footer__cyber">
        <h2 className="title" onClick={() => navigate("/meeting")}>
          START A PROJECT
        </h2>
        <div style={{ textAlign: "left" }} className="flexbox">
          <div className="cols__footer">
            <a>ILAB di Tiziana</a>
            <br />
            <a>GalloPiazza B. D'Arezzo</a> <br />
            <a>n.1184016 - Pagani,</a> <br />
            <a>Salerno</a>
          </div>
          <div style={{ color: "white" }} className="cols__footer">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto:info@ilabsolutions.it"
            >
              info@ilabsolutions.it
            </a>{" "}
            <br />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+ (39) 081 3443 748"
            >
              + (39) 081 3443 748
            </a>
          </div>
          <div className="cols__footer">
            <a>Facebook</a>
            <br />
            <a>Linkedin</a>
            <br />
            <a>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
