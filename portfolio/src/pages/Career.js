import React from 'react';
import './Career.css';

const Career = () => {
  const workExperience = [
    {
      company: 'TIMES WORLD, DUBAI',
      role: 'Infrastructure Engineer',
      period: 'July 2024 - Present',
      responsibilities: [
        'Successfully led the migration of production servers from Ubuntu 18.04 to 22.04/24.04 LTS with zero downtime, including Plesk upgrades.',
        'Migrated 30+ hosted websites along with email services, DNS records, and SSL configurations.',
        'Performed thorough post-migration validation (web integrity, mail flow, DNS resolution) to ensure business continuity.',
        'Designed and implemented CI/CD pipelines for Node.js applications using Azure DevOps and GitLab.',
        'Automated deployments to Hostinger environments using Git repository hooks.',
        'Deployed and maintained Prometheus and Grafana for real-time monitoring.',
        'Conducted server load testing with LoadRunner to identify bottlenecks.',
        'Developed and enforced infrastructure, website, and application security checklists.',
        'Maintained compliance with ISO and GDRFA standards.',
        'Supported successful completion of ISO audits for ISO 9001:2015 and ISO 27001:2022.',
        'Installed and configured Active Directory (AD) for user and policy management.',
        'Deployed a centralized IT asset management system.',
        'Managed onboarding and offboarding workflows for IT assets and credentials.',
        'Delivered prompt first-line support for infrastructure issues.'
      ]
    },
    {
      company: 'HASH CODE IT SOLUTIONS, Dubai',
      role: 'Cloud System Engineer',
      period: 'Sep 2021 - Jun 2024',
      responsibilities: [
        'Managed Linux servers on AWS, DigitalOcean, and Azure for optimal performance.',
        'Installed and configured Odoo instances on Ubuntu servers.',
        'Implemented Docker architecture to reduce infrastructure expenses.',
        'Automated Odoo database backups using Bash scripts.',
        'Spearheaded the implementation of Loki, Promtail, Prometheus, and Grafana for monitoring.',
        'Implemented Nginx for server routing and Certbot for SSL management.',
        'Automated Let\'s Encrypt SSL certificate renewal process.',
        'Provided technical support to in-house and client teams.',
        'Managed mail servers and configured Zulip chat for team collaboration.'
      ]
    },
    {
      company: 'TECHZMATRIX SOFTWARE TECHNOLOGIES Pvt. Ltd',
      role: 'AWS Supportive',
      period: 'Feb 2020 - Jul 2020',
      responsibilities: [
        'Provided first-line response to general IT inquiries for troubleshooting and technical assistance.',
        'Offered suggestions and recommendations on IT network, security, and server configurations.',
        'Maintained and updated manuals and provided training for company systems.'
      ]
    },
    {
        company: 'TELEYSIA NETWORKS Pvt. Ltd',
        role: 'Radio Frequency Engineer',
        period: 'Sep 2016 - Dec 2019',
        responsibilities: [
            'Conducted UBR Equipment Feasibility surveys, report making, installation, and maintenance.',
            'Performed drive tests for 2G, 3G, 4G, VoLte, RF surveys, and BTS optimization.',
            'Supervised on-premise cable routing for IWAN projects.',
            'Provided customer technical support and reporting.'
        ]
    },
    {
        company: 'SYSLINT TECHNOLOGIES INDIA PVT LTD.',
        role: 'Jr. Support Engineer',
        period: 'Sep 2015 - Mar 2016',
        responsibilities: [
            'Provided sales and server-side support for Linux products.',
            'Performed Linux server administration for national and international outsourced servers (RedHat, Ubuntu, Fedora).'
        ]
    }
  ];

  return (
    <div className="career-container">
      <h2>My Career Journey</h2>
      <div className="timeline">
        {workExperience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <span className="company">{job.company}</span>
              <span className="period">{job.period}</span>
              <ul>
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
