import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Muhammed Noufal</h1>
        <h2>Cloud Systems Engineer</h2>
        <p>
          I am a skilled Cloud Systems Engineer adept at optimizing cloud infrastructure utilization and ensuring seamless operations. With a strong background in Linux server architecture and cloud services management, I excel in developing and implementing strategies for performance enhancement and cost optimization. My proactive approach to problem-solving and commitment to automation align well with the demands of modern cloud environments.
        </p>
      </section>

      <section className="services-section">
        <div className="service-card">
          <h3>Cloud Infrastructure & Deployment</h3>
          <p>Reliable infrastructure is the backbone of any digital service. I design and manage cloud environments that are secure, scalable, and optimized for performance—on AWS, Azure, and beyond.</p>
        </div>
        <div className="service-card">
          <h3>DevOps & Automation</h3>
          <p>I streamline operations using CI/CD pipelines, Docker, and custom scripting. From deployments to backups, I automate processes that save time, reduce errors, and keep systems running smoothly.</p>
        </div>
        <div className="service-card">
          <h3>Monitoring & Security</h3>
          <p>I implement real-time monitoring with tools like Prometheus and Grafana, and enforce security best practices to keep your infrastructure compliant and resilient.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
