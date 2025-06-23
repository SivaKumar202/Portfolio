import React, { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiCodechef } from 'react-icons/si';

function Hero() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (nameRef.current) {
  //       const { left, top, width, height } = nameRef.current.getBoundingClientRect();
  //       const x = (e.clientX - left - width / 2) / 25;
  //       const y = (e.clientY - top - height / 2) / 25;
  //       nameRef.current.style.transform = `translate(${x}px, ${y}px)`;
  //     }
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
      
      {/* Floating particles effect */}
      {/* <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div> */}

      <div className="relative z-10 text-center px-4">
        {/* Main heading with mouse movement effect */}
        <div 
          ref={nameRef}
          className="transition-transform duration-300 ease-out select-none"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="inline-block bg-gradient-to-r from-green-400  to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-pink-500 hover:to-purple-400 transition-all duration-500">
              Siva Kumar
            </span>
          </h1>
        </div>

        {/* Animated typing effect for roles */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6 typing-text px-2 sm:px-4">
          <span className="inline-block px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 backdrop-blur-sm whitespace-normal sm:whitespace-nowrap">
            Full-Stack Developer
          </span>
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/siva-kumar-23793b256/", color: "hover:text-blue-400" },
            { Icon: FaGithub, href: "https://github.com/SivaKumar202", color: "hover:text-gray-400" },
            { Icon: SiCodechef, href: "https://www.codechef.com/users/siva_kumar807", color: "hover:text-brown-500 " },
            { Icon: HiOutlineMail, href: "mailto:sivakumarjujjavarapu123@gmail.com", color: "hover:text-red-400" }
          ].map(({ Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-300 ${color} transform hover:scale-110 transition-all duration-300`}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-black rounded-lg group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></span>
          <span className="relative flex items-center text-white">
            <a href="https://www.linkedin.com/in/siva-kumar-23793b256/" className="hover:cursor-pointer">👋 Let's connect</a>
            <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}

export default Hero;
