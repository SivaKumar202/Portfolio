import Particles from "./Particles";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/Aboutme";
// import SplashCursor from "./SplashCursor";

function App() {
  return (
    <>
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={10000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center">
          <Navbar />
          <Hero />
          <div id="about">
            <AboutMe />
          </div>
          {/* Add Projects section with ID */}
          <div id="projects">
            {/* Your Projects component will go here */}
          </div>
          {/* Contact section is already in AboutMe component */}
          <div id="contact">
            {/* This div will help scroll to the contact form in AboutMe */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
