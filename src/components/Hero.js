// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, my name is Austin.</h1>
      <p className="text-xl md:text-2xl mb-6">I'm a full stack web developer.</p>
      <a href="#projects" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">View my work</a>
    </section>
  );
};

export default Hero;
