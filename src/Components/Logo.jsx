import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <svg 
          viewBox="0 0 100 100" 
          className="w-8 h-8 md:w-10 md:h-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7' }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
            </linearGradient>
          </defs>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <path
            d="M65,25 
               C80,25 85,35 85,45 
               C85,55 75,60 65,60 
               L35,60 
               C25,60 15,65 15,75 
               C15,85 25,90 35,90 
               L75,90 
               L75,75 
               L35,75 
               C32,75 30,73 30,70 
               C30,67 32,65 35,65 
               L65,65 
               C80,65 90,57 90,45 
               C90,33 80,20 65,20 
               L25,20 
               L25,35 
               L65,35 
               C68,35 70,37 70,40 
               C70,43 68,45 65,45 
               L25,45 
               L25,25 
               Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
          />
        </svg>
        <div className="absolute inset-0 bg-white/5 rounded-full filter blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
        Siva Kumar
      </span>
    </div>
  );
};

export default Logo;
