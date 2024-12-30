"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mt-6 fixed top-0 left-0 w-full bg-black text-white py-2 px-4 z-50 flex justify-between items-center max-w-screen-2xl mx-auto">
      <div className="text-2xl flex items-center ml-3">
        <button
          className="md:hidden text-white hover:text-blue-500 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black text-center py-4 md:py-0 md:flex md:static md:gap-6`}
        >
          <a
            href="#home"
            className="block py-2 md:inline hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#education"
            className="block py-2 md:inline hover:text-blue-500 transition-colors duration-300"
          >
            Education
          </a>
          <a
            href="#skills"
            className="block py-2 md:inline hover:text-blue-500 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 md:inline hover:text-blue-500 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 md:inline hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex gap-5 items-center mr-4 md:mr-10 lg:mr-16">
        <a
          href="https://github.com/vishesh-tanwar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-500 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/vishesh-tanwar-0027031b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://leetcode.com/u/VisheshTanwar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300 mt-1"
        >
          <Image
            src="/Leetcode_Logo.png"
            alt="Leetcode"
            width={25}
            height={25}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
