import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Technologies from '../components/Technologies';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative z-10">
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
