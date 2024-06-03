import React from "react";

// import hero-img from '../'
import hero_img from "../../Assets/hero_img.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>Award winning</h2>
            <h1>Digital Marketing Agency</h1>
            <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
            nec risus finibus feugiat et fermentum
            </p>
            <button className="hero-btn">CONTACT US</button>
        </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
