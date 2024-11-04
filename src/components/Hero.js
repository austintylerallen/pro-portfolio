import React, { useEffect, useState } from 'react';
import './Hero.css'; // Ensure this file is correctly linked

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show all elements with a fade-in effect
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Adjust timing if needed
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center text-white"
    >
      <div className={`typing-container ${showContent ? 'fade-in-all' : 'hidden'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, my name is Austin.
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          I'm a full stack web developer.
        </p>
        <a
          href="#projects"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
        >
          View my work
        </a>
      </div>
    </section>
  );
};

export default Hero;
