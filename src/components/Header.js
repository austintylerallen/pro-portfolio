// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Austin Allen</h1>
        <nav className="space-x-4">
          <Link to="hero" smooth={true} className="cursor-pointer hover:text-red-500">Home</Link>
          <Link to="about" smooth={true} className="cursor-pointer hover:text-red-500">About</Link>
          <Link to="projects" smooth={true} className="cursor-pointer hover:text-red-500">Projects</Link>
          <Link to="contact" smooth={true} className="cursor-pointer hover:text-red-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
