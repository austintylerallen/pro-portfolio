import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg';
import portfolioPDF from '../assets/austinallen-full-stack-dev.pdf';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll'; // Import your custom hook

const About = () => {
  const aboutRef = useFadeInOnScroll(0.5); // Use your hook with threshold

  return (
    <section ref={aboutRef} className="bg-gray-900 bg-opacity-50 py-24 section fade-in" id="about">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-white mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
          <p className="text-center md:text-left text-white mb-4">
            I'm a full-stack developer with a passion for building dynamic, interactive web applications. 
            I recently completed the <strong>Full-Stack Coding Bootcamp</strong> at the <strong>University of Denver</strong>, 
            where I gained hands-on experience with technologies like React.js, Node.js, Express, and MongoDB.
            The bootcamp emphasized problem-solving, agile development, and the importance of writing clean, maintainable code.
            I’m excited to apply my skills to real-world projects and continue learning along the way. In the meantime, I like to solve puzzles and hang out with my dog Kalani.
          </p>
        </div>

        <a
          href={portfolioPDF}
          download="austinallen-full-stack-dev.pdf"
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Download My Portfolio
        </a>
      </div>
    </section>
  );
};

export default About;
