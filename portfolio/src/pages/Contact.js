import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // TODO: USER ACTION REQUIRED
    // 1. Sign up for EmailJS at https://www.emailjs.com/
    // 2. Create a new email service and get your Service ID.
    // 3. Create a new email template and get your Template ID.
    // 4. Find your Public Key (User ID) in your account settings.
    // 5. Replace the placeholder values below with your actual credentials.
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || userID === 'YOUR_USER_ID') {
        setStatusMessage('EmailJS is not configured. Please follow the instructions in the code.');
        setIsSubmitting(false);
        return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatusMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage(''), 5000); // Clear message after 5 seconds
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you have any questions or want to get in touch, please send me a message using the form below.</p>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name" // Must match the variable in your EmailJS template
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email" // Must match the variable in your EmailJS template
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message" // Must match the variable in your EmailJS template
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
