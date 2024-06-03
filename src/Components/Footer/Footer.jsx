import React from "react";
import "./Footer.css";

import icon1 from "../../Assets/Group 500.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons-container">
        <img src={icon1} alt="Icon 1" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
