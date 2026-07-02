import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "AI-Powered Notes Generator",
    image: "/projects/ai-notes.png",
    description:
      "Developed a full-stack AI-powered application using React.js, FastAPI, Python, SQLite, and Google Gemini API. Features include AI-generated notes, PDF summarization, question answering, and JWT authentication.",
    technologies: [
      "React.js",
      "FastAPI",
      "Python",
      "SQLite",
      "Gemini API",
      "JWT",
    ],
    github: "https://github.com/mallelaankitha82-ux",
    demo: "#",
  },
  {
    title: "Event Management System",
    image: "/projects/event-management.png",
    description:
      "Developed a full-stack Event Management System with secure JWT authentication, role-based access, CRUD operations, and REST API integration.",
    technologies: [
      "React.js",
      "FastAPI",
      "SQLite",
      "REST API",
      "JWT",
    ],
    github: "https://github.com/mallelaankitha82-ux",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-lg hover:bg-cyan-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-black"
                  >
                    <HiOutlineExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;