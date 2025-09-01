import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>CYBER MAVERICX (cybermavericx.com)</h3>
        <p><strong>Status:</strong> Ongoing Development</p>
        <p>
          This is my personal web development and hosting project where I showcase my professional portfolio and technical blog. The entire platform is a hands-on project demonstrating my skills in cloud hosting, web development, and content creation.
        </p>
        <h4>Key Areas:</h4>
        <ul>
          <li><strong>Web Development & Hosting:</strong> I am actively working on hosting my portfolio and blog on the domain cybermavericx.com. The site is part of an ongoing development project, showcasing professional and technical content.</li>
          <li><strong>Blogging & Content Creation:</strong> I am developing a blog section to share insights and articles on cloud engineering, DevOps practices, and other IT-related topics.</li>
        </ul>
        <p>
          For more detailed examples of my technical work and problem-solving, please check out my <Link to="/blogs">Blogs page</Link>.
        </p>
      </div>
    </div>
  );
};

export default Projects;
