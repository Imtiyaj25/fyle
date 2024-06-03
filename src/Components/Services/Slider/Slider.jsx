import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

import icon from '../../../Assets/icon.svg'
import arrow from '../../../Assets/arrow.svg'

// Import images
import image1 from '../../../Assets/1-2.png';
import image2 from '../../../Assets/2-2.png';
import image3 from '../../../Assets/3-2.png';
import image4 from '../../../Assets/1-2.png';
import image5 from '../../../Assets/2-2.png';
import image6 from '../../../Assets/3-2.png';
import image7 from '../../../Assets/1-2.png';
import image8 from '../../../Assets/2-2.png';
import image9 from '../../../Assets/3-2.png';
import image10 from '../../../Assets/1-2.png';
import image11 from '../../../Assets/2-2.png';
import image12 from '../../../Assets/3-2.png';

const sliderImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const CustomSlider = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="slide">
            <div className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className='slider-img' src={image} alt={`Slide ${index}`} />
                </div>
                <div className="flip-card-back">
                  <div className="content"></div>
                  <img src={icon} alt="" />
                  <h2>web development</h2>
                  <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                  <button onClick={() => window.open('https://fylehq.com', '_blank')}>Read More <img src={arrow} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
