import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[5] w-full shadow-md" style={{ backgroundColor: 'white' }}>
      {/* Main Navbar */}
      <div className="h-[65px] w-full flex items-center justify-around px-4">
        <span className="text-[25px] leading-[25px] font-black" style={{ color: '#ea242a' }}>
          INIT
        </span>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600 text-sm">
          <a href="#academics" className="hover:text-gray-800 font-black">Overview</a>
          <a href="#why-recruit" className="hover:text-gray-800 font-black">Why Recruit</a>
          <a href="#director" className="hover:text-gray-800 font-black">Director's Message</a>
          <a href="#process" className="hover:text-gray-800 font-black">Recruitment Process</a>
          <a href="#contact" className="hover:text-gray-800 font-black">Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
