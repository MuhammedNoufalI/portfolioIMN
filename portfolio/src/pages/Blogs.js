import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'wkhtmltopdf Errors in Odoo: The Unpatched Qt',
      date: 'June 21, 2025',
      summary: 'Generating PDF reports in Odoo using wkhtmltopdf is a common task... Here’s a deep dive into one of the most frequent issues and how to solve it cleanly.',
      link: 'https://cybermavericx.com/?p=35'
    },
    {
      title: 'Odoo 17 Large Database Restore Error – 413 Request Entity Too Large',
      date: 'June 21, 2025',
      summary: 'While restoring a large Odoo database backup on an existing server, a “413 Request Entity Too Large” error surfaced...',
      link: 'https://cybermavericx.com/?p=29'
    },
    {
      title: 'Odoo 17 Installation on Ubuntu 22.04 LTS',
      date: 'June 21, 2025',
      summary: 'A detailed guide to installing Odoo 17 on a Digital Ocean Ubuntu 22.04 Droplet, covering all the necessary steps.',
      link: 'https://cybermavericx.com/?p=1'
    },
    {
      title: 'Syncing github with bitbucket – with commit History',
      date: 'June 21, 2025',
      summary: 'A look at how to use multiple Git hosting platforms for a project, keeping both GitHub and Bitbucket synchronized with full commit history.',
      link: 'https://cybermavericx.com/?p=39'
    },
    {
      title: 'Installing & Configuring LAMP Stack on RHEL 6 (From Source)',
      date: 'June 21, 2025',
      summary: 'A guide on how to install and configure the popular open-source LAMP web development stack from source on RHEL 6.',
      link: 'https://cybermavericx.com/?p=44'
    },
    {
      title: 'Compile and Install LightSquid on RHEL 6',
      date: 'June 21, 2025',
      summary: 'Learn how to compile and install LightSquid, a lightweight and fast web-based reporting tool for Squid proxy server logs, on RHEL 6.',
      link: 'https://cybermavericx.com/?p=46'
    }
  ];

  return (
    <div className="blogs-container">
      <h2>My Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <span className="blog-date">{post.date}</span>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
