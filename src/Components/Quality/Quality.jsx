import React from 'react';
import './Quality.css';

// Import logos from the assets folder
import logo1 from '../../Assets/1-1.svg';
import logo2 from '../../Assets/2-1.svg';
import logo3 from '../../Assets/3-1.svg';
import logo4 from '../../Assets/4.svg';
import ProjectsSection from './Projects/Projects';

// Sample data
const sections = [
  {
    logo: logo1,
    title: 'Clarified Vision & Target',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo2,
    title: 'High Performance',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo3,
    title: 'Maintain Security',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  },
  {
    logo: logo4,
    title: 'Better Strategy & Quality',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
  }
];

const InfoSection = () => {
  return (
    <div className="info-section">
      {/* <h2>Our Sections</h2> */}
      <div className="title">
                 <h3>WHY CHOOSE US</h3>
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
      <ProjectsSection/>
    </div>
  );
};

export default InfoSection;
