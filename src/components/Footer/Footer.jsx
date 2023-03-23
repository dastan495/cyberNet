import React from "react";
import './footer.css'

const Footer = () => {
  return <div>
    <footer className="footer__cyber" >
      <h2 className="title">START A PROJECT</h2>
      <div className="flexbox">
          <div className="cols__footer">
            <a>ILAB di Tiziana</a>
            <a>GalloPiazza B. D'Arezzo</a>
            <a>n.1184016 - Pagani,</a>
            <a>Salerno</a>
          </div>  
          <div className="cols__footer">
            <a href="mailto:info@ilabsolutions.it" >info@ilabsolutions.it</a>
            <a href='tel:+ (39) 081 3443 748' >+ (39) 081 3443 748</a>
          </div>
          <div className="cols__footer">
            <a>Facebook</a>
            <a>Linkedin</a>
            <a>Twitter</a>
          </div>
      </div>
    </footer>
  </div>;
};

export default Footer;
