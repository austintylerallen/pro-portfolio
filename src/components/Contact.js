// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-900 bg-opacity-75 h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-25 p-8 rounded shadow-md flex items-start space-x-8">
        <h1 className="text-5xl font-bold text-white">Contact Me</h1>
        <div className="max-w-lg">
          <p className="text-gray-300 mb-4">
            Email: <a href="mailto:austintallen07@gmail.com" className="text-red-500 hover:text-red-700">austintallen07@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-4">
            GitHub: <a href="https://github.com/austintylerallen" className="text-red-500 hover:text-red-700">austintylerallen</a>
          </p>
          <p className="text-gray-300">
            LinkedIn: TBA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
