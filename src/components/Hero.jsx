import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 flex items-center relative"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Mallela Ankitha
          </h1>

          <div className="text-2xl text-gray-300 mt-4">
            <ReactTyped
              strings={[
                "Software Engineer",
                "Full Stack Developer",
                "Python Developer",
                "AI Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-gray-400 mt-8 leading-8">
            Passionate Computer Science student interested in Full Stack
            Development, Artificial Intelligence, REST APIs, Backend
            Engineering, and building modern web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/ankitha%20resume%20m(3)%20(1).pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">

            <a
              href="https://github.com/mallelaankitha82-ux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="hover:text-cyan-400 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mallela-ankitha-9046aa328"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="hover:text-cyan-400 transition"
              />
            </a>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="/photo.jpg"
            alt="Mallela Ankitha"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />
        </div>

      </div>

      {/* Scroll Down Icon */}
      <HiArrowDown
        size={35}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce"
      />
    </section>
  );
}

export default Hero;