import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="#hero" className="text-2xl font-bold text-blue-600">
              Yamini's Portfolio
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="text-gray-800 hover:text-blue-600">
              Skills
            </a>
            <a href="#projects" className="text-gray-800 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
