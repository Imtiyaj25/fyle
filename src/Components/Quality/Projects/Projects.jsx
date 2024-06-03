import React, { useState } from 'react';
import './Projects.css';

// Import images from the assets folder
import project1 from '../../../Assets/image-1.png';
import project2 from '../../../Assets/image-2.png';
import project3 from '../../../Assets/image-3.png';

// Sample data
const projects = [
  {
    title: 'Project One',
    description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    imageUrl: project1
  },
  {
    title: 'Project Two',
    description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    imageUrl: project2
  },
  {
    title: 'Project Three',
    description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of',
    imageUrl: project3
  }
];

const ProjectsSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProjectIndex(index);
  };

  return (
    <div className="projects-section">
        <div className="text">
            <h2>OUR PROJECT</h2>
            <h1>why are we best</h1>
        </div>
      
      <div className="projects-content">
        <div className="project-image">
          <img src={projects[activeProjectIndex].imageUrl} alt={projects[activeProjectIndex].title} />
        </div>
        <div className="project-details">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-info ${index === activeProjectIndex ? 'active' : ''}`} 
              onClick={() => handleProjectClick(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
