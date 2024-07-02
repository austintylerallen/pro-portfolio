import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ show }) => {
  return (
    <header className={`fixed top-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-offwhite p-4 z-50 transition-transform duration-500 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold animated-name font-roboto">Austin Allen</h1>
        <nav className="space-x-4">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">About</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Projects</Link>
          <Link to="technologies" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Technologies</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
