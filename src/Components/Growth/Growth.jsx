import React from 'react';
import './Growth.css';

// Import logos from the assets folder
import logo1 from '../../Assets/heart (2).svg';
import logo2 from '../../Assets/clock (3).svg';
import logo3 from '../../Assets/Path 4402.svg';
import logo4 from '../../Assets/Path 4406.svg';
import Feedback from './Feedback/Feedback';

// Sample data
const sections = [
  {
    logo: logo1,
    title: '199 +',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo2,
    title: '1591 +',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo3,
    title: '283 +',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo4,
    title: '75 +',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  }
];

const GrowthSection = () => {
  return (
    <div>
    <div className="growth-content">
    <div className="growth-section">
      {/* <h2>Our Sections</h2> */}
      <div className="title">
                 <h2>WHY CHOOSE US</h2>
                 <h1>Why We Are Best</h1>
      </div>
      <div className="sections-container">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <img src={section.logo} alt={section.title} className="logo" />
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
    </div>
  );
};

export default GrowthSection;
