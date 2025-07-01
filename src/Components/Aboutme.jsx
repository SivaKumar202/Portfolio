import React, { useRef, useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiBootstrap,
  SiMui,
} from "react-icons/si";
import { motion } from "framer-motion";
import { sendEmail } from "./emailjs";

const AboutMe = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const form = useRef(null);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(form, setFormStatus);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (textRef.current) {
        const { left, top, width, height } =
          textRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        textRef.current.style.transform = `
          perspective(1000px)
          rotateY(${x * 20}deg)
          rotateX(${-y * 20}deg)
          translateZ(50px)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (textRef.current) {
        textRef.current.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-[60vh] relative px-4 py-16">
        {/* Background gradient blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* WHO AM I? Title with 3D effect */}
          <div
            ref={textRef}
            className="mb-12 transition-transform duration-300 ease-out cursor-default select-none"
          >
            <h1 className="text-5xl md:text-7xl text-center font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-500">
                WHO AM I?
              </span>
            </h1>
            <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform hover:scale-x-150 transition-transform duration-300"></div>
          </div>

          {/* Description with animated border and glass effect */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-6 py-8 bg-black/50 backdrop-blur-sm rounded-lg leading-none">
              <p className="text-lg md:text-2xl text-gray-200 font-medium text-center leading-relaxed">
                Hi! I'm{" "}
                <span className="text-purple-400 font-semibold">
                  Siva Kumar
                </span>
                , a passionate and motivated
                <span className="text-blue-400 font-semibold">
                  {" "}
                  full stack developer
                </span>{" "}
                focused on building clean, scalable, and user-centric web
                applications.
              </p>
              <p className="mt-4 text-lg md:text-2xl text-gray-200 font-medium text-center leading-relaxed">
                I'm currently working on real-world projects to strengthen my
                skills in the
                <span className="text-purple-400 font-semibold">
                  {" "}
                  MERN Stack
                </span>{" "}
                (MongoDB, Express, React, Node.js) and grow as a developer by
                contributing to meaningful solutions.
              </p>
              <p className="mt-4 text-lg md:text-2xl text-gray-200 font-medium text-center leading-relaxed">
                I’m eager to connect with professionals, collaborate on
                <span className="text-blue-400 font-semibold">
                  {" "}
                  open-source projects
                </span>
                , and contribute meaningfully to the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 p-4">
        <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent mb-12 hover:scale-105 transform transition-all duration-300">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 justify-items-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaHtml5 className="text-5xl md:text-6xl text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              HTML5
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaCss3Alt className="text-5xl md:text-6xl text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              CSS3
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaJs className="text-5xl md:text-6xl text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              JavaScript
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaReact className="text-5xl md:text-6xl text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              React
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiTailwindcss className="text-5xl md:text-6xl text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              TailwindCSS
            </span>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiBootstrap className="text-5xl md:text-6xl text-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              Bootstrap
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiMui className="text-5xl md:text-6xl text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              Material-UI
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiMongodb className="text-5xl md:text-6xl text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              MongoDB
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaNodeJs className="text-5xl md:text-6xl text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              Node.js
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiExpress className="text-5xl md:text-6xl text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              Express
            </span>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <FaPython className="text-5xl md:text-6xl text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              Python
            </span>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20">
            <SiCplusplus className="text-5xl md:text-6xl text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
            <span className="text-white mt-4 font-medium opacity-80 group-hover:opacity-100">
              C++
            </span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20 p-4">
        <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent mb-12 hover:scale-105 transform transition-all duration-300">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                Swiggy Website
              </h3>
              <p className="text-gray-300 mb-4">
                A modern Swiggy website built with React and TailwindCSS,
                featuring smooth animations and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
                  TailwindCSS
                </span>
                <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full">
                  JavaScript
                </span>
              </div>
              <a
                href="https://swiggy-clone-react-mu.vercel.app/"
                target="_"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                View Project
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {" "}
                Resort Booking Website
              </h3>
              <p className="text-gray-300 mb-4">
                A full-stack Resort Booking Website with user authentication,
                Booking management, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full">
                  Node.js
                </span>
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-sm bg-green-500/20 text-blue-300 rounded-full">
                  TailwindCSS
                </span>
              </div>
              <a
                href="https://next-resort-project.vercel.app/login"
                target="_"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                View Project
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                Task Management App
              </h3>
              <p className="text-gray-300 mb-4">
                A collaborative task management application with real-time
                updates and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-yellow-500/20 text-yellow-300 rounded-full">
                  Express
                </span>
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
                  Socket.io
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                View Project
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 group"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 mb-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl text-center font-bold bg-gradient-to-r from-purple-800 to-purple-300 bg-clip-text text-transparent mb-12 hover:scale-105 transform transition-all duration-300"
          >
            Get In Touch
          </motion.h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="relative px-6 py-8 bg-black/50 backdrop-blur-sm rounded-lg space-y-6"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-gray-200 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full md:w-auto hover:cursor-pointer px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </motion.button>

              {formStatus === "sending" && (
                <p className="text-yellow-400 text-center">
                  Sending message...
                </p>
              )}
              {formStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutMe;
