import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000); // Reset success message after 3 seconds
  };

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
        {submitted && (
        <div className="success-message">
          <div className="rocket-animation">
            🚀
          </div>
          <p>Message successfully sent!</p>
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-icons">
        <a href="mailto:abhishekk61669@gmail.com">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/suryanarayan-kumar-yadav-ba3607239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B4Cj5txqMSxyxbk8hp9wtEg%3D%3Ds"target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>

        <a href="https://www.instagram.com/abhi4.50?igsh=MTMxNGxxbjZ4ODkwNA==s" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>

        <a href="tel: +91-6204417725"
          className='contact-icon'>
            <i class="fa fa-phone"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
