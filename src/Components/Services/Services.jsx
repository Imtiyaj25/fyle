import React from "react";
import "./Services.css";
import CustomSlider from "./Slider/Slider";

const Services = () => {
  return (
    <div className="services">
      <div className="content">
      <div className="left">
        <h2>what we do</h2>
        <h1>services provide for you</h1>
      </div>
      <div className="right">
        <p>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
        </p>
      </div>
      </div>
      <CustomSlider/>
      
    </div>
    
    
  );
};

export default Services;
