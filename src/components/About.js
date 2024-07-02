import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg'; // Ensure the path is correct

const About = () => {
  return (
    <section className="bg-gray-900 bg-opacity-50 py-24 section" id="about"> {/* Updated padding */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-white mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8"
          />
          <p className="text-center md:text-left text-white mb-4">
            Fully committed to the philosophy of life-long learning, I'm a full-stack developer with a deep passion for JavaScript, React, and all things web development. The unique combination of creativity, logic, technology, and never running out of new things to discover drives my excitement and passion for web development. When I'm not at my computer, I like to spend my time researching various subjects, spending time with friends and family, and hanging out with my dog Kalani.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
