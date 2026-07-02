import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFastapi,
  SiSqlite,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <FaPython size={45} />,
  },
  {
    name: "Java",
    icon: <FaJava size={45} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} />,
  },
  {
    name: "React.js",
    icon: <FaReact size={45} />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={45} />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite size={45} />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={45} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={45} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={45} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={45} />,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          Technical Skills
        </motion.h2>

        <p className="text-center text-gray-400 mt-5">
          Technologies and tools I use for building modern applications.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;