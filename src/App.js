// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Header from './components/Header';
import background from './assets/background.gif';
import './index.css';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'auto',
        }}
      >
        <Header />
        <div id="hero">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
