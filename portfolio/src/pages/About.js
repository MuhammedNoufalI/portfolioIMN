import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a skilled Cloud Systems Engineer adept at optimizing cloud infrastructure utilization and ensuring seamless operations. With a strong background in Linux server architecture and cloud services management, I excel in developing and implementing strategies for performance enhancement and cost optimization. My proactive approach to problem-solving and commitment to automation align well with the demands of modern cloud environments.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <ul>
          <li>Linux server administration</li>
          <li>Cloud management (AWS, Azure, DigitalOcean, Contabo)</li>
          <li>CI/CD using Azure DevOps</li>
          <li>Reverse proxy configuration (Nginx, Apache) with SSL</li>
          <li>Docker deployment and containerization</li>
          <li>Continuous deployment with version control systems</li>
          <li>Scripting for system backup and automation (Bash)</li>
          <li>Cloud governance and policy control</li>
          <li>Resource optimization and cost analysis</li>
          <li>Problem-solving and attention to detail</li>
          <li>SaaS platform management (Odoo.sh, odoo.com)</li>
          <li>Sales and technical chat support</li>
          <li>cPanel and WHM administration</li>
          <li>AWS (EC2, S3, RDS, VPC, CloudWatch, IAM, Route 53, Elastic Beanstalk, Lightsail) configuration and management</li>
        </ul>
      </section>

      <section className="certifications-section">
        <h2>Certifications & Trainings</h2>
        <ul>
          <li>AWS Certified Solutions Architect - Associate (Validation: 8GH9JT1KFNE41HCD)</li>
          <li>RHCSA and RHCE (Certificate: 150-010-312)</li>
          <li>Technical safety passport - Huawei (KRL20171215/16943)</li>
        </ul>
      </section>

      <section className="personal-details-section">
        <h2>Personal Details</h2>
        <ul>
          <li><strong>Date of Birth:</strong> 5th May 1992</li>
          <li><strong>Languages:</strong> English, Malayalam & Tamil</li>
          <li><strong>Contact:</strong> +971545975212</li>
          <li><strong>Email:</strong> muhammednoufal7@gmail.com</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/imnoufal" target="_blank" rel="noopener noreferrer">linkedin.com/in/imnoufal</a></li>
          <li><strong>Blog:</strong> <a href="https://cybermavericx.com" target="_blank" rel="noopener noreferrer">cybermavericx.com</a></li>
        </ul>
      </section>
    </div>
  );
};

export default About;
