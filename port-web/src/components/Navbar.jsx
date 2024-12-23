import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle active class based on the section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container nav_bar' data-aos="fade-down" data-aos-duration="1000">
      <div className='left nav_items'>Portfolio</div>
      <div className='right'>
        <a href="#home" className={`nav_items ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
        <a href="#about" className={`nav_items ${activeSection === 'about' ? 'active' : ''}`}>About</a>
        <a href="#experience" className={`nav_items ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
        <a href="#skills" className={`nav_items ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
        <a href="#projects" className={`nav_items ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
        <a href="#contact" className={`nav_items ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
