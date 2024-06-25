// src/App.js
import React from 'react';
import Home from './pages/Home';
import background from './assets/background.svg'; // Ensure the path is correct
import './index.css';

function App() {
  return (
    <div
      className="min-h-screen bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', // or 'cover' depending on your preference
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Home />
    </div>
  );
}

export default App;
