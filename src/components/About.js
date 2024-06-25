// src/components/About.js
import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 bg-opacity-75 h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-25 p-8 rounded shadow-md flex items-start space-x-8">
        <h1 className="text-5xl font-bold text-white">About Me</h1>
        <div className="max-w-lg">
          <p className="text-gray-300 mb-4">
            Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React, and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover drives my excitement and passion for web development. When I'm not at my computer I like to spend my time reading, keeping fit and playing guitar.
          </p>
          <ul className="list-disc list-inside text-white mt-4">
            <li>JavaScript (ES6+)</li>
            <li>React.js, Redux</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Mongoose</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
