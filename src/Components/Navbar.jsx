import React, { useState, useEffect } from "react";
import { HiDownload } from 'react-icons/hi';
import Logo from './Logo';
import pdfFile from '../assets/Siva-Kumar-jujjavarapu.pdf'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleDownload = () => {
  //   const resumePath = './assets/Siva-Kumar-jujjavarapu.pdf';
  //   const link = document.createElement('a');
  //   link.href = resumePath;
  //   link.download = '';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Siva-Kumar-Jujjavarapu.pdf'; // Specify the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div 
        className={`mx-auto px-4 sm:px-6 transition-all duration-300 ${
          scrolled 
            ? 'w-[95%] sm:w-[90%] lg:w-[85%] bg-black/70' 
            : 'w-[95%] sm:w-[90%] lg:w-[85%] bg-black/40'
        } backdrop-blur-md rounded-2xl border border-white/10`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="focus:outline-none"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-8">
              <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
              <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
              <button
                onClick={handleDownload}
                onMouseEnter={() => setDownloadHovered(true)}
                onMouseLeave={() => setDownloadHovered(false)}
                className="relative group px-4 py-2 text-white rounded-lg overflow-hidden hover:cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300"></span>
                <span className="absolute inset-0 transform translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></span>
                <span className="relative flex items-center space-x-2">
                  <span>Resume</span>
                  <HiDownload className={`transition-transform duration-300 ${downloadHovered ? 'translate-y-0.5' : ''}`} />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none group"
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45 bg-white' : '-translate-y-1.5 bg-gray-300 group-hover:bg-white'
              }`}></span>
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? 'opacity-0 bg-white' : 'bg-gray-300 group-hover:bg-white'
              }`}></span>
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45 bg-white' : 'translate-y-1.5 bg-gray-300 group-hover:bg-white'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
            <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('projects')}>Projects</MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
            <button
              onClick={handleDownload}
              className=" hover:cursor-pointer w-full mt-2 px-4 py-2.5 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Resume</span>
              <HiDownload />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium group cursor-pointer"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></span>
  </button>
);

// Mobile navigation link component
const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-left"
  >
    {children}
  </button>
);

export default Navbar;
