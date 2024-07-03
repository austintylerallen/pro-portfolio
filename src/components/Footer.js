// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Austin Allen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
