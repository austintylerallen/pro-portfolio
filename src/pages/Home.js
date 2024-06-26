// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col" id="hero">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
