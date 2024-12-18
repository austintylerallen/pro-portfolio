import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll'; // Import the hook

function Contact() {
  const contactRef = useFadeInOnScroll(0.5); // Use the hook

  return (
    <div ref={contactRef} className="h-screen flex items-center justify-center section fade-in" id="contact">
      <div className="p-8 rounded shadow-md w-full max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white font-montserrat mb-6 text-center">Contact Me</h1>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="mailto:austintallen07@gmail.com" className="text-red-500 hover:text-red-700">austintallen07@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">+1 (575) 270-3779</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faGithub} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="https://github.com/austintylerallen" className="text-red-500 hover:text-red-700">GitHub</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="https://linkedin.com/in/austintylerallen1234" className="text-red-500 hover:text-red-700">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
